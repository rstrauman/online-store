import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    clearCart,
    getCartItems,
    removeItemFromCart,
    saveCartItems
} from '../utils/cartStorage';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [orderMessage, setOrderMessage] = useState('');

    useEffect(() => {
        setCartItems(getCartItems());
    }, []);

    const updateQuantity = (id, change) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === id) {
                const newQuantity = item.quantity + change;

             return {
                ...item,
                quantity: newQuantity < 1 ? 1 : newQuantity
            };
        }

            return item;
        });

        setCartItems(updatedItems);
        saveCartItems(updatedItems);
        setOrderMessage('');
    };

    const removeItem = id => {
        const updatedItems = removeItemFromCart(id);
        setCartItems(updatedItems);
        setOrderMessage('');
    };

    const emptyCart = () => {
        const updatedItems = clearCart();
        setCartItems(updatedItems);
        setOrderMessage('');
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const tax = subtotal * 0.12;
    const shipping = subtotal > 0 && subtotal < 100 ? 12.99 : 0;
    const total = subtotal + tax + shipping;

    const placeOrder = event => {
        event.preventDefault();

        if (cartItems.length === 0) {
            setOrderMessage('Your cart is empty. Add products before placing an order.');
            return;
        }

        setOrderMessage(`Order ready. Payment method: ${paymentMethod.replace('-', ' ')}.`);
    };

    return (
        <main className='cart-page'>
            <section className='container cart-container'>
                <div className='cart-heading'>
                    <p>Veltra checkout</p>
                    <h1>Your Cart</h1>
                </div>

                {cartItems.length === 0 ? (
                    <div className='empty-cart'>
                        <h2>Your cart is empty</h2>
                        <p>Browse the store and add a product to see it here.</p>
                        <Link to='/' className='cart-link'>Back to Home</Link>
                    </div>
                ) : (
                    <div className='cart-layout'>
                        <div className='cart-items'>
                            {cartItems.map(item => (
                                <article className='cart-item' key={item.id}>
                                    <div className='cart-img-holder'>
                                        <img src={item.image} alt={item.title} />
                                    </div>

                                    <div className='cart-item-info'>
                                        <p className='cart-category'>{item.category}</p>
                                        <h2>{item.title}</h2>
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>

                                    <div className='quantity-controls'>
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>

                                    <p className='item-total'>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    <button
                                        className='remove-btn'
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </article>
                            ))}
                        </div>

                        <form className='cart-summary' onSubmit={placeOrder}>
                            <h2>Order Summary</h2>

                            <div className='summary-row'>
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>

                            <div className='summary-row'>
                                <span>Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>

                            <div className='summary-row'>
                                <span>Shipping</span>
                                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                            </div>

                            <div className='summary-row total-row'>
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <label htmlFor='payment'>Payment Method</label>
                            <select
                                id='payment'
                                value={paymentMethod}
                                onChange={event => setPaymentMethod(event.target.value)}
                            >
                                <option value='credit-card'>Credit Card</option>
                                <option value='debit-card'>Debit Card</option>
                                <option value='paypal'>PayPal</option>
                                <option value='cash-on-delivery'>Cash on Delivery</option>
                            </select>

                            <button className='checkout-btn' type='submit'>
                                Place Order
                            </button>

                            <button
                                className='clear-btn'
                                type='button'
                                onClick={emptyCart}
                            >
                                Clear Cart
                            </button>

                            {orderMessage && <p className='order-message'>{orderMessage}</p>}
                        </form>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Cart;

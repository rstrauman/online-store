const CART_KEY = 'veltra-cart-items';

function normalizeCartItem(product) {
    return {
        id: product.id,
        title: product.title,
        price: Number(product.price),
        image: product.image,
        category: product.category,
        quantity: product.quantity || 1
    };
}

export function getCartItems() {
    const savedItems = localStorage.getItem(CART_KEY);

    if (!savedItems) {
        return [];
    }

    try {
        return JSON.parse(savedItems);
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

export function saveCartItems(cartItems) {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

export function addItemToCart(product) {
    const cartItems = getCartItems();
    const productToAdd = normalizeCartItem(product);
    const existingItem = cartItems.find(item => item.id === productToAdd.id);

    let updatedItems;

    if (existingItem) {
        updatedItems = cartItems.map(item =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        updatedItems = [...cartItems, productToAdd];
    }

    saveCartItems(updatedItems);
    return updatedItems;
}

export function removeItemFromCart(id) {
    const updatedItems = getCartItems().filter(item => item.id !== id);
    saveCartItems(updatedItems);
    return updatedItems;
}

export function clearCart() {
    saveCartItems([]);
    return [];
}

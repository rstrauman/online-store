import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../utils/cartStorage';
import Modal from '../components/Modal';

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [similarProducts, setSimilarProducts] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState('');

    const [product, setProduct] = useState(null);
    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${url}/${id}`);
                console.log('Data from axios:');
                console.log(response.data);
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
                navigate('/');
            }
        };

        if (id > 0 && id <= 20) {
            fetchProduct();
        } else {
            navigate('/');
        }
    }, [id, navigate]);

    useEffect(() => {
    const fetchSimilarProducts = async () => {
        try {
            if (!product) return;

            const response = await axios.get(`${url}/category/${product.category}`);

            const filteredProducts = response.data
                .filter(item => item.id !== product.id)
                .slice(0, 4);

            setSimilarProducts(filteredProducts);
        } catch (error) {
            console.log(error.message);
        }
    };
    fetchSimilarProducts();
}, [product]);

    const handleAddToCart = () => {
        addItemToCart(product);

        setAddedProduct(product.title);
        setIsModalOpen(true);

        setTimeout(() => {
            setIsModalOpen(false);
        }, 2000);
    };

    return (
    <section className="product-page">
        <div className="container">
            {product && (
                <>
                    <div className="product-detail-container">
                        <p className="product-detail-label">Veltra Product Detail</p>
                        <div className="product-detail-card">
                            <div className="product-detail-img-holder">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-detail-info">
                                <p className="product-detail-category">{product.category}</p>
                                <h1>{product.title}</h1>
                                <p className="product-detail-description">
                                    {product.description}
                                </p>
                                <div className="product-stats">
                                    <p>Rate: {product.rating.rate}</p>
                                    <p>Count: {product.rating.count}</p>
                                </div>
                                <div className="product-action-row">
                                    <p className="product-detail-price">${product.price}</p>
                                    <button 
                                        className="cart-btn" 
                                        onClick={handleAddToCart}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName={addedProduct}/>
                    <div className="similar-section">
                        <h2>Similar Items</h2>
                        <div className="similaritems">
                            {similarProducts.map(item => (
                                <Link to={`/product/${item.id}`} key={item.id}>
                                    <div className="similarcard">
                                        <div className="similar-img-holder">
                                            <img src={item.image} alt={item.title} />
                                        </div>

                                        <div className="similar-info">
                                            <p>{item.category}</p>
                                            <h3>{item.title}</h3>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    </section>
);
}

export default Product;
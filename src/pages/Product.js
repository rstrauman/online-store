import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { addItemToCart } from '../utils/cartStorage';

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [similarProducts, setSimilarProducts] = useState([]);

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

    return (
        <section>
            <h2>Product Detail</h2>
            <div>
                {product && (
                    <aside>
                        <div className='imgholder'>
                            <img src={product.image} alt={product.title} />
                        </div>

                        <div className='infoholder'>
                            <h1>{product.title}</h1>
                            <p>Category: {product.category}</p>
                            <p>Description: {product.description}</p>
                            <p className='ratecount'>Count: {product.rating.count}</p>
                            <p className='raterate'>Rate: {product.rating.rate}</p>

                            <div className='pricetag'>
                                <p>${product.price}</p>
                                <button className='cartbtn' onClick={() => addItemToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
            <h2>Similiar Items</h2>
            <div className='similaritems'>
                {similarProducts.map(item => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <div className='similarcard'>
                            <img src={item.image} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Product;
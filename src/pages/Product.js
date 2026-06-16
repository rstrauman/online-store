import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();

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
                                <button className='pricebtn'>${product.price}</button>
                            </div>
                        </div>
                    </aside>
                )}
            </div>
        </section>
    );
}

export default Product;
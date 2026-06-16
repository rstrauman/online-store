import { Link } from 'react-router-dom';
import { addItemToCart } from '../utils/cartStorage';

function ProductCard(props) {
    return (
        <div className='productcard'>
            <div className='imgholder'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='infoholder'>
                <h2>{props.title}</h2>
                <p>{props.category}</p>
                <p>${props.price}</p>
                <button><Link to={`/product/${props.id}`}>Details</Link></button>
                <button onClick={() => addItemToCart(props)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
import { Link } from 'react-router-dom';

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
                <button><Link to={`/product/${props.id}`}>💡</Link></button>
                <button onClick="">🛒</button>
            </div>
        </div>
    );
}

export default ProductCard;
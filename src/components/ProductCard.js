import { Link } from 'react-router-dom';
import { addItemToCart } from '../utils/cartStorage';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

function ProductCard(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addedProduct, setAddedProduct] = useState('');

    const product = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        category: props.category
    };

    const handleAddToCart = (product) => {
        addItemToCart(product);

        setAddedProduct(product.title);
        setIsModalOpen(true);
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.9,
            y: 40 
        }, visible: (i) => ({ 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 70, 
                damping: 15,
                delay: i * 0.06 
            }}), exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2 }
        }
    };
    return (
        <motion.div 
            className="product-card"
            layout
            custom={props.index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            exit="exit"
        >
            <div className='img-holder'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='info-holder'>
                <h2>{props.title}</h2>
                <div className='flex product-info-container'>
                    <p>{props.category}</p>
                    <p>${props.price}</p>
                </div>
                <div className='flex product-btns'>
                    <button className='details-btn'><Link to={`/product/${props.id}`}>Details</Link></button>
                    <button className='cart-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName={addedProduct}/>
        </motion.div>
    );
}

export default ProductCard;
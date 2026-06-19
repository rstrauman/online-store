import ProductCard from './ProductCard';
import { AnimatePresence } from 'framer-motion';

function Gallery(props) {
    return (
        <div className='container gallery'>
            <AnimatePresence mode="popLayout" key={props.products.length}>
                {props.products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        index={index}
                        image={product.image}
                        title={product.title}
                        category={product.category}
                        price={product.price}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}

export default Gallery;
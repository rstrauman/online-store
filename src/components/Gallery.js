import ProductCard from './ProductCard';

function Gallery(props) {
    return (
        <div className='gallery'>
            {props.products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default Gallery;
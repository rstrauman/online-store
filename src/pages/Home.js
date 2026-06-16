import axios from 'axios';
import { useEffect, useState } from 'react';
import Gallery from '../components/Gallery';
import HeroBanner from '../components/HeroBanner'

function Home() {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');

    const url = 'https://fakestoreapi.com/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                setProducts(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchProducts();
    }, []);

    const selectproducts = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <main>
            <HeroBanner query={query} setQuery={setQuery}/>
            <Gallery products={selectproducts} />
        </main>
    );
}

export default Home;
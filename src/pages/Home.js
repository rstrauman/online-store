import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import Gallery from '../components/Gallery';
import HeroBanner from '../components/HeroBanner'
import SecondaryBanner from '../components/SecondaryBanner';

function Home() {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    const productRef = useRef(null);
    const topRatedRef = useRef(null);

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

    let selectproducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === '' || product.category === category;

        return matchesSearch && matchesCategory;
    });

    const sortedProducts = [...selectproducts];
    
    if (sortOrder === 'low-high') selectproducts.sort((a, b) => a.price - b.price);
    if (sortOrder === 'high-low') selectproducts.sort((a, b) => b.price - a.price);

    const topRated = [...products]
        .sort((a, b ) => (b.rating?.rate || 0) - (a.rating?.rate || 0))
        .slice(0, 3);

    return (
        <main>
            <HeroBanner query={query} setQuery={setQuery} productRef={productRef}/>
            <div ref={productRef} className="catalog-section-wrapper">
                <h2 className="catalog-heading">Our Catalogue</h2>
                <div className="container catalog-controls">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelery">Jewelry</option>
                    </select>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="low-high">Price: Low to High</option>
                        <option value="high-low">Price: High to Low</option>
                    </select>
                </div>
                <Gallery products={selectproducts} />
                <div ref={topRatedRef}>
                    <SecondaryBanner topRatedRef={topRatedRef}/>
                    {topRated.length > 0 && (
                        <Gallery products={topRated}/>
                    )};
                </div>
            </div>
        </main>
    );
}

export default Home;
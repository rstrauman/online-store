import { animate } from 'framer-motion';

function HeroBanner(props) {
    const scrollToCatalog = () => {
        const targetElement = props.productRef.current;
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            animate(window.scrollY, targetPosition, {
                type: "spring",      
                stiffness: 45,       
                damping: 15,         
                mass: 0.8,
                onUpdate: (latest) => window.scrollTo(0, latest) 
            });
        }
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        const isFirstCharacter = props.query === '' && value.trim() !== '';
        props.setQuery(value);

        if (isFirstCharacter) {
            scrollToCatalog();
        }
    };

    return (
        <section className='hero'>
            <div className='overlay'></div>
            <div className='container hero-content'>
                <input
                    type="text"
                    placeholder="Search for an item.."
                    value={props.query}
                    onChange={handleSearchChange}
                />
                <button onClick={scrollToCatalog}>Browse Catalogue</button>
            </div>
        </section>
    );
}

export default HeroBanner;
import { animate } from 'framer-motion';

function SecondaryBanner(props) {
    const scrollToRated = () => {
        const targetElement = props.topRatedRef.current;
        
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

    return (
        <section className="banner">
            <div className="overlay"></div>
            <div className="container banner-content">
                <h2>Editor's Picks</h2>
                <p>Hand-selected products chosen for quality, design, and value.</p>
                <button onClick={scrollToRated}>Explore our Top-Rated Items</button>
            </div>
        </section>
    );
}

export default SecondaryBanner;
import Rain from '../media/rainy.png';

function HeroBanner() {
    return (
        <section className='hero'>
            <div className='overlay'></div>
            <div className='container hero-content'>
                <input type='search' placeholder='Search for an item...'/>
                <button>Browse Catalogue</button>
            </div>
        </section>
    );
}

export default HeroBanner;
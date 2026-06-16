import Rain from '../media/rainy.png';

function HeroBanner(props) {
    return (
        <section className='hero'>
            <div className='overlay'></div>
            <div className='container hero-content'>
                <input
                    type="text"
                    placeholder="Search for an item.."
                    value={props.query}
                    onChange={event => props.setQuery(event.target.value)}
                />
                <button>Browse Catalogue</button>
            </div>
        </section>
    );
}

export default HeroBanner;
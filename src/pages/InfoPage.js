import { Link } from 'react-router-dom';

function InfoPage({ title, text }) {
    return (
        <main className='info-page'>
            <section className='container info-container'>
                <p className='cart-category'>Veltra</p>
                <h1>{title}</h1>
                <p>{text}</p>
                <Link to='/' className='cart-link'>Back to Home</Link>
            </section>
        </main>
    );
}

export default InfoPage;

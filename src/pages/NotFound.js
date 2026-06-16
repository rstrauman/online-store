import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <main className='notfound-page'>
            <section className='container notfound-container'>
                <p className='notfound-code'>404</p>
                <h1>Page Not Found</h1>
                <p>
                    The page you are looking for does not exist or the route is incorrect.
                </p>
                <Link to='/' className='cart-link'>Back to Home</Link>
            </section>
        </main>
    );
}

export default NotFound;

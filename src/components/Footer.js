import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container footer flex">
                <div className="flex top">
                    <div className="flex row">
                        <h3>Get to Know Us</h3>
                        <p>Careers</p>
                        <p>News</p>
                        <p>Email</p>
                    </div>
                    <div className="flex row">
                        <h3>Pages</h3>
                        <p><Link to={`/`}>Home</Link></p>
                        <p><Link to={`/contact`}>Contact</Link></p>
                        <p><Link to={`/account`}>Account</Link></p>
                    </div>
                    <div className="flex row">
                        <h3>Help</h3>
                        <p>Returns</p>
                        <p>FAQ</p>
                        <p>Customer Service</p>
                    </div>
                </div>
                <div className="flex bottom">
                    <h3>Veltra</h3>
                    <p>© 2026 Veltra. All rights reserved.</p>
                    <p>130 Henlow Bay | Winnipeg, Manitoba | (204) 333-6767</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
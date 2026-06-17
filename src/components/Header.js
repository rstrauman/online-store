import { HiOutlineShoppingCart as Cart } from "react-icons/hi";
import { HiOutlineCog as Settings} from "react-icons/hi";
import { HiOutlineUser as User } from "react-icons/hi";
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <header>
            <div className="container header flex">
                <nav>
                    <ul className="nav flex">
                        <li><NavLink to='/' className=''>Home</NavLink></li>
                        <li><NavLink to='/about' className=''>About</NavLink></li>
                        <li><NavLink to='/contact' className=''>Contact</NavLink></li>
                    </ul>
                </nav>
                <h2>Veltra</h2>
                <nav>
                    <ul className="nav flex right">
                        <li><NavLink to='/cart' className=''><Cart/></NavLink></li>
                        <li><NavLink to='/account' className=''><User/></NavLink></li>
                        <li><NavLink to='/settings' className=''><Settings/></NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
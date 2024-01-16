import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <Link to='/' className='me-5'>hi store</Link>
                    <Link to="/hero" className='me-5'>
                        hero
                    </Link>
                    <Link to="/about" className='me-5'>
                        about
                    </Link>
                    <Link to="/login" className='me-5'>
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

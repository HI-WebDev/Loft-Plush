import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import { RiMenu4Line, RiMenu5Fill } from "react-icons/ri";
import { useState } from 'react';

import './navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cart = useSelector((state) => state.cart.cartItems)

    const [click, setClick] = useState(false)
    const handleClick = () => {
        return setClick(!click)
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container ps-0 pe-0 pb-2">
                <Link to="/" className="navbar-brand fw-bold fs-4">Loft <span>Plush</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={handleClick}>
                    {click ? <RiMenu4Line /> : <RiMenu5Fill />}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/hero" className="nav-link me-3 text-capitalize fw-bold" aria-current="page">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link me-3 text-capitalize fw-bold" aria-current="page">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/catalog" className="nav-link me-3 text-capitalize fw-bold">catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link text-capitalize fw-bold">cart ({cart.length})</Link>
                        </li>
                    </ul>
                    <form className="contact d-flex">
                        <button className="mainBtn d-flex align-items-center justify-content-center p-2 ps-3 pe-3"
                            type="submit">
                            <Link to='/contact' className='text-decoration-none text-uppercase'>contact</Link>
                            <GoArrowUpRight className='fw-bold ms-1' />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

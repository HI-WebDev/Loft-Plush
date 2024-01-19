import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
import './button.css';


const Button = ({  dir, Btitle }) => {
    return (
        <div>
            <button className="Button fs-5 d-flex align-items-center justify-content-center"
                type="submit">
                <Link to={`/${dir}`} className='text-decoration-none text-uppercase'>
                    {Btitle}
                </Link>
                <GoArrowUpRight className='fw-bold ms-1' />
            </button>
        </div>
    )
}

export default Button

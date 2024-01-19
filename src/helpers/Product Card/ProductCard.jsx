import { Link } from 'react-router-dom';
import img from '../../assets/images/new.png';


import './product-card.css';


const ProductCard = () => {
    return (
        <div className='productCard'>
            <div className="card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <Link to="#" className="card-title fs-5 text-decoration-none">Product Name</Link>
                    <div className="d-flex align-items-center mt-3">
                        <span className='me-4 fw-bold'>$991</span>
                        <del>$1000</del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

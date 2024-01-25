import { Link } from 'react-router-dom';


import './product-card.css';


const ProductCard = ({ product }) => {
    return (
        <div className='productCard'>
            <div className="card">
                <img src={product.image} className="card-img-top" alt="" />
                <div className="card-body ps-0">
                    <Link to={`/catalog/${product.id}`} className="card-title fs-5 text-decoration-none">
                        {product.productName}
                    </Link> 
                    <div className="d-flex align-items-center mt-3">
                        <span className='me-4 fw-bold'>${product.price}</span>
                        <del>${product.delPrice}</del>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

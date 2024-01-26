import img from '../../assets/images/review.jpg'
import { IoStarSharp } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

import './reviews.css'
const ReviewsList = ({ review }) => {
    return (
        <div className="reviewslist">
            <div className="d-flex align-items-center mb-3">
                <div className="revImage me-3">
                    <img src={img} alt="" className="img-fluid" />
                </div>
                <div className="d-flex flex-column">
                    <h5 className='text-capitalize mb-1 fs-5'>{review.name}</h5>
                    <span className='stars mt-0'>
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarHalf />
                    </span>
                </div>
            </div>
            <p className='ms-1'>{review.text}</p>

        </div>
    )
}

export default ReviewsList

import Header from '../../helpers/Header/Header';
import TestiCard from '../../helpers/Testimonials Card/TestiCard';
import testimonials from '../../assets/Data/testimonials';

import './testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="testimonials" btnDisplat="d-none" />

                <div className="row mt-5">
                    {testimonials.map((testi, index) => {
                        return (
                            <div className="col-lg-6 mb-3" key={index}>
                                <TestiCard testi={testi} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Testimonials

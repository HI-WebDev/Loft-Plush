import Header from '../../helpers/Header/Header';
import TestiCard from '../../helpers/Testimonials Card/TestiCard';


import './testimonials.css';

const Testimonials = () => {
    return (
        <div className='testimonials mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="testimonials" btnDisplat="d-none" />

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <TestiCard />
                    </div>

                    <div className="col-lg-6">
                        <TestiCard />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-lg-6">
                        <TestiCard />
                    </div>

                    <div className="col-lg-6">
                        <TestiCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials

import { Link } from 'react-router-dom';
import line1 from '../../assets/images/line1.jpg'
import line2 from '../../assets/images/line2.png'
import line3 from '../../assets/images/line3.jpg'
import line4 from '../../assets/images/line4.jpg'
import { GoArrowUpRight } from "react-icons/go";
import './hero.css';
import New from '../New/New';
import Quote from '../Quote/Quote';
import Shop from '../Shop/Shop';
import Testimonials from '../Testimonials/Testimonials';
import HomeStead from '../homestead Forniture/HomeStead';
import Faq from '../FAQ/Faq';
import Blog from '../Blog/Blog';
import FollowUs from '../Follow Us/FollowUs';


const Hero = () => {
    return (
        <>
            <div className='home mt-5 mb-5 d-flex align-items-center'>
                <div className="container ps-0 pe-0">
                    <div className="row d-flex align-items-center justify-content-center mb-3">
                        <div className="col-lg-2">
                            <h1 className="title text-uppercase">we</h1>
                        </div>
                        <div className="col-lg-6">
                            <div className="image ">
                                <img src={line1} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-end">
                            <h1 className="title text-uppercase">create</h1>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center mb-3">
                        <div className="col-lg-6 d-flex justify-content-">
                            <h1 className="title text-uppercase">Forniture</h1>
                        </div>
                        <div className="col-lg-6">
                            <div className="image ">
                                <img src={line2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>


                    <div className="row d-flex align-items-center justify-content-center mb-3">
                        <div className="col-lg-2 ">
                            <h1 className="title text-uppercase">for</h1>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-end">
                            <h1 className="title text-uppercase">your</h1>
                        </div>
                        <div className="col-lg-4">
                            <div className="image ">
                                <img src={line3} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h1 className="title text-uppercase">home</h1>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center justify-content-center ">
                        <div className="col-lg-2">
                            <h1 className="title text-uppercase">and</h1>
                        </div>
                        <div className="col-lg-3">
                            <div className="image">
                                <img src={line4} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <h1 className="title text-uppercase">business</h1>
                        </div>
                        <div className="col-lg-2">
                            <button className="mainBtn d-flex align-items-center justify-content-center p-3 ps-4 pe-4 w-100" type="submit">
                                <Link to='/contact' className='text-decoration-none text-uppercase fs-4'>browse</Link>
                                <span className="ms-1 fs-4">
                                    <GoArrowUpRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <New />
            <Quote />
            <Shop />
            <Testimonials />
            <HomeStead />
            <Faq />
            <Blog />
            <FollowUs />
        </>
    )
}

export default Hero

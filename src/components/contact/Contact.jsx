import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import './contact.css';

const Contact = () => {
    return (
        <div className='contact mt-5 mb-5'>
            <div className="container">
                <div className="d-flex flex-column text-center mb-4">
                    <h1 className='title text-capitalize fw-bold fs-3 mb-2'>
                        contact us
                    </h1>
                    <p className='lh-base fs-6 fw-bold text-black-50 text-capitalize'>
                        any questions or remarks? just write us a message
                    </p>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="left d-flex flex-column p-4">
                            <h1 className='fs-4 text-capitalize'>contact information</h1>
                            <p className='mb-5 pb-4 fw-bold text-white-50'>Say something to start a live chat!</p>
                            <div className="d-flex align-items-center mb-4 pb-2">
                                <FaPhone className="me-2" />
                                +2126xxxxxxxx
                            </div>
                            <div className="d-flex align-items-center mb-4 pb-2">
                                <MdEmail className="me-2" />
                                email@test.com
                            </div>
                            <div className="d-flex align-items-center mb-5 pb-4">
                                <FaLocationDot className="me-2" />
                                casablanca,casablanca
                            </div>
                            <div className="icons d-flex">
                                <span className="d-flex justify-content-center align-items-center me-3">
                                    <FaInstagram />
                                </span>
                                <span className="d-flex justify-content-center align-items-center me-3">
                                    <FaTwitter />
                                </span>
                                <span className="d-flex justify-content-center align-items-center">
                                    <FaLinkedinIn />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right d-flex flex-column pe-4 pt-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div className="col-5 d-flex flex-column">
                                    <label htmlFor="name" className="text-capitalize">
                                        first name
                                    </label>
                                    <input type="text" name="name" id="name" className="p-1 ps-0 pe-0" placeholder="Enter your first name" />
                                </div>
                                <div className="col-5 d-flex flex-column">
                                    <label htmlFor="name" className="text-capitalize">
                                        last name
                                    </label>
                                    <input type="text" name="name" id="name" className="p-2 pt-1 ps-0 pe-0" placeholder="Enter your last name" />
                                </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="col-5 d-flex flex-column">
                                    <label htmlFor="name" className="text-capitalize">
                                        email
                                    </label>
                                    <input type="email" name="name" id="name" className="p-1 ps-0 pe-0" placeholder="Enter your email" />
                                </div>
                                <div className="col-5 d-flex flex-column">
                                    <label htmlFor="name" className="text-capitalize">
                                        phone number
                                    </label>
                                    <input type="tel" name="name" id="name" className="p-1 ps-0 pe-0" placeholder="Enter your phone" />
                                </div>
                            </div>
                            <h1 className="fs-6 fw-bold mb-2 mt-4 text-capitalize">
                                select subject ?
                            </h1>
                            <div className="d-flex mb-4">
                                <div className="form-check me-4">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label text-capitalize" htmlFor="flexCheckChecked">
                                        general inquiry
                                    </label>
                                </div>
                                <div className="form-check me-4">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label text-capitalize" htmlFor="flexCheckChecked">
                                        general inquiry
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label text-capitalize" htmlFor="flexCheckChecked">
                                        general inquiry
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex flex-column mb-5">
                                <label htmlFor="name" className="text-capitalize">
                                    message
                                </label>
                                <input type="text" name="name" id="name" className="p-1 ps-0 pe-0" placeholder="Enter your message" />
                            </div>

                            <div className="text-capitalize d-flex justify-content-end">
                                <span className="btn p-2 ps-4 pe-4">
                                    send message
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

import Header from '../../helpers/Header/Header';

import './faq.css';
const Faq = () => {
    return (
        <div className='faq mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title='faq' btnDisplat="d-none" />

                <div className='mt-4 mt-md-5'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item pt-2  pb-2">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How long does it take to manufacture and deliver my products?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item pt-2 pb-2">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    What is the shipping cost?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item pt-2 pb-2">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    How do I follow my order?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item pt-2 pb-2">
                            <h2 className="accordion-header" id="headingFour">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                    Does a recipient have to be present to accept a delivery?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item pt-2 pb-2">
                            <h2 className="accordion-header" id="headingFive">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                    How can I modify my shipping address after placing my order?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item pt-2 pb-2">
                            <h2 className="accordion-header" id="headingSix">
                                <button className="accordion-button ps-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                    <span className='fw-bold me-1'>&#8220;</span>
                                    Return for Any Reason  <span className='fw-bold ms-1 me-1'>&#8220;</span>
                                    - what does that mean?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse show" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum cum placeat aliquid unde voluptate debitis totam,
                                    veritatis sint adipisci? Quibusdam dicta beatae,
                                    laudantium totam omnis voluptates exercitationem
                                    rerum consequatur possimus?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq

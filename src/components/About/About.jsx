import abt from '../../assets/images/about.png';
import brand from '../../assets/images/vans.png';
import loca1 from '../../assets/images/location1.png';
import loca2 from '../../assets/images/location2.png';
import AbtHeader from '../../helpers/About Header/AbtHeader';
import EmpBox from '../../helpers/Emp Box/EmpBox';
import EmployerCard from '../../helpers/Employer Card/EmployerCard';

import './about.css';

const About = () => {
    return (
        <div className='about mt-5 mb-5'>
            <div className="container">

                <div className="d-flex flex-column text-center mb-4">
                    <h1 className='title text-capitalize fs-3 mb-2'>
                        we are
                        <span className='t-color m-1 fw-bold'>Loft plush</span>
                    </h1>
                    <p className='lh-base fs-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit
                    </p>
                </div>

                {/*start about */}
                <div className="row mb-5 pb-5 d-flex align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="image">
                            <img src={abt} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="desc d-flex flex-column">
                            <p className='lh-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Nemo omnis animi, iure harum beatae architecto, quae, ad
                                esse expedita qui non.
                                <p className='mt-3 mb-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nemo omnis animi, iure harum beatae architecto, quae, ad
                                    esse expedita qui non. Voluptates, modi obcaecati? Sint
                                    neque laborum atque obcaecati unde?
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nemo omnis animi, iure harum beatae architecto, quae, ad
                                    esse expedita qui non. Voluptates, modi obcaecati? Sint
                                    neque laborum atque obcaecati unde?
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nemo omnis animi, iure harum beatae architecto, quae, ad
                                    esse expedita qui non. Voluptates, modi obcaecati? Sint
                                    neque laborum atque obcaecati unde?
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
                {/*end about */}


                {/*start leaders members */}
                <AbtHeader title="meet our" span="leadership" />
                <div className="row mb-5 pb-5">
                    <div className="col-lg-4">
                        <EmployerCard name="hi developer" func="prisedent & ceo" />
                    </div>
                    <div className="col-lg-4">
                        <EmployerCard name="hi developer" func="prisedent & ceo" />
                    </div>
                    <div className="col-lg-4">
                        <EmployerCard name="hi developer" func="prisedent & ceo" />
                    </div>
                </div>
                {/*end leaders members */}


                {/* start team members */}
                <AbtHeader title="meet our" span="teams" />
                <div className="row mb-4">
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                </div>
                <div className="row mb-5 pb-5">
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                    <div className="col-lg-3">
                        <EmpBox name="HI Developer" />
                    </div>
                </div>
                {/* end team members */}


                {/*start investors brands */}
                <AbtHeader title="meet our" span="brands" />
                <div className="row mb-5 pb-5">
                    <div className="col-4">
                        <Brand title="vans" />
                    </div>
                    <div className="col-4">
                        <Brand title="vans" />
                    </div>
                    <div className="col-4">
                        <Brand title="vans" />
                    </div>

                </div>
                {/*end investors brands */}


                {/* start location */}
                <AbtHeader title="check our" span="locations" />
                <div className="row d-flex align-items-end justify-content-between mb-5 pb-4">
                    <div className="col-lg-6">
                        <div className="d-flex align-items-end">
                            <div className="locaImag me-4">
                                <img src={loca1} alt="" className='img-fluid' />
                            </div>
                            <div className="d-flex flex-column">
                                <h1 className="fs-4 mb-2">Casablanca</h1>
                                <span className='desc text-black-50'>
                                    Lorem ipsum dolor sit amet consectetur
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <div className="d-flex align-items-end">
                            <div className="locaImag2 me-4">
                                <img src={loca2} alt="" className='img-fluid' />
                            </div>
                            <div className="d-flex flex-column">
                                <h1 className="fs-4 mb-2">Casablanca</h1>
                                <span className='desc text-black-50'>
                                    Lorem ipsum dolor sit amet consectetur
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end location */}
            </div>
        </div>
    )
}

export const Brand = ({ title }) => {
    return (
        <div className='brands d-flex flex-column align-items-center'>
            <div className="brandImage d-flex align-items-center justify-content-center">
                <img src={brand} alt="" className="img-fluid" />
            </div>
            <h1 className="fs-5 text-uppercase mt-2">{title}</h1>
        </div>
    )
}



export default About

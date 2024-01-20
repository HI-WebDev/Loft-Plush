import Button from '../../helpers/MainButton/Button';
import './footer.css';


const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <div className='footer pt-5 pb-3'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <div className="d-flex flex-column">
                            <h1 className="fs-3 text-uppercase mb-">loft plush</h1>
                            <h5 className='fs-6 text-uppercase'>loft forniture</h5>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fw-bold fs-6 mb-3'>follow us</li>
                            <li className='text-uppercase mb-2'>
                                <Button dir="#" Btitle="instagram" />
                            </li>
                            <li className='text-uppercase mb-2'>
                                <Button dir="#" Btitle="pinterest" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fw-bold fs-6 mb-3'>for customers</li>
                            <li className='text-uppercase mb-2'>
                                catalog
                            </li>
                            <li className='text-uppercase mb-2'>
                                pay
                            </li>
                            <li className='text-uppercase mb-2'>
                                delivery
                            </li>
                            <li className='text-uppercase mb-2'>
                                return
                            </li>
                            <li className='text-uppercase mb-2'>
                                faq
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fw-bold fs-6 mb-3'>company</li>
                            <li className='text-uppercase mb-2'>
                                about
                            </li>
                            <li className='text-uppercase mb-2'>
                                testimonials
                            </li>
                            <li className='text-uppercase mb-2'>
                                contact
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul className='list-unstyled'>
                            <li className='text-uppercase fw-bold fs-6 mb-3'>ask a question</li>
                            <li className='text-uppercase mb-2'>
                                <Button dir="#" Btitle="call" />
                            </li>
                            <li className='text-uppercase mb-2'>
                                <Button dir="#" Btitle="telegram" />
                            </li>
                            <li className='text-uppercase mb-2'>
                                test@email.com
                            </li>
                            <li className='text-uppercase mb-2'>
                                +2126xxxxxxx
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="line"></span>
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className="fs-6 text-uppercase">
                            &copy; {year} loft plush
                        </h1>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center">
                        <h1 className="fs-6 text-uppercase">Developed by HI-Dev</h1>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <h1 className="fs-6 text-uppercase">privacy policy</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

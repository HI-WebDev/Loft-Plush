import about from '../../assets/images/about.png';
import Button from '../../helpers/MainButton/Button';
import './quote.css';



const Quote = () => {
    return (
        <div className='quote mt-5 mb-5  pt-md-5'>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-between">
                    <div className="col-12 col-lg-5 mb-4">
                        <div className="image">
                            <img src={about} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column">
                            <p className='desc lh-base mb-lg-5 text-center'>
                                A great business, in our opinion, is built around excellent
                                people. Our qualified designers are committed to realizing your
                                particular vision and are here to help you make the most of your
                                space. able to handle any situation and level of your project.
                            </p>
                            <div className="links mt-5 d-flex justify-content-between align-items-center pb-2">
                                <span>
                                    <Button dir="about" Btitle='about' />
                                </span>
                                <span>
                                    <Button dir="about" Btitle="hideveloper" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote

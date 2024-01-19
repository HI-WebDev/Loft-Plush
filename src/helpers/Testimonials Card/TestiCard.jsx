import testi from '../../assets/images/testi.png';
import './testi-card.css';

const TestiCard = () => {
    return (
        <>
            <div className="testiCard pt-4 pb-2 p-4">
                <div className="d-flex align-items-center mb-4">
                    <div className="image me-3">
                        <img src={testi} alt="" className="img-fluid" />
                    </div>
                    <div className="d-flex flex-column">
                        <h1 className="fs-5 mb-1 text-uppercase">hi developer</h1>
                        <span>lorem lorem</span>
                    </div>
                </div>
                <p className='lh-base'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magnam quos hic, saepe placeat quo voluptatem iste ullam repudiandae
                    numquam minus assumenda ducimus molestias temporibus officia nisi.
                </p>
            </div>
        </>
    )
}

export default TestiCard

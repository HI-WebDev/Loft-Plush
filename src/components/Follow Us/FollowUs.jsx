import Header from '../../helpers/Header/Header';
import follow from '../../assets/images/follow.png';
import './follow.css';

const FollowUs = () => {
    return (
        <div className='follow mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="follow us" btnDisplat="d-block" dir="catalog" Btitle="check" />

                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="image">
                            <img src={follow} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image two">
                            <img src={follow} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image three">
                            <img src={follow} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="image">
                            <img src={follow} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs

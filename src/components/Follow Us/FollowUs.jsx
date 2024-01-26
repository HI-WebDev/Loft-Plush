import Header from '../../helpers/Header/Header';
import follow1 from '../../assets/images/follow1.png';
import follow2 from '../../assets/images/follow2.png';
import follow3 from '../../assets/images/follow3.png';
import follow4 from '../../assets/images/follow4.png';
import './follow.css';

const FollowUs = () => {
    return (
        <div className='follow mt-5 mb-5 pt-5 pb-5'>
            <div className="container">
                <Header title="follow us" btnDisplat="d-block" dir="catalog" Btitle="check" />

                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="followImage">
                            <img src={follow1} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="followImage two">
                            <img src={follow2} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="followImage three">
                            <img src={follow3} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="followImage">
                            <img src={follow4} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs

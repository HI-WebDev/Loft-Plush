import Header from '../../helpers/Header/Header';
import lights from '../../assets/images/lights.png';

import './shop.css';

const Shop = () => {
    return (
        <div className='shop mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="shop" btnDisplat="d-none" />

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="image position-relative">
                            <img src={lights} alt="" className="img-fluid" />
                            <span className="title fs-3 text-uppercase">Lights</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image position-relative">
                            <img src={lights} alt="" className="img-fluid" />
                            <span className="title fs-3 text-uppercase">Lights</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6">
                        <div className="image position-relative">
                            <img src={lights} alt="" className="img-fluid" />
                            <span className="title fs-3 text-uppercase">Lights</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image position-relative">
                            <img src={lights} alt="" className="img-fluid" />
                            <span className="title fs-3 text-uppercase">Lights</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop

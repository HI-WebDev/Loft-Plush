import Button from '../../helpers/MainButton/Button';
import homestead from '../../assets/images/homestead.png';

import './home-stead.css';

const HomeStead = () => {
    return (
        <div className="homeStead mt-5 mb-5 pt-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="image">
                            <img src={homestead} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="fs-2 text-uppercase">
                            homeStead forniture
                        </h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column">
                            <p className="desc mb-5">
                                An enthusiasm for creative living solutions develops into a
                                bigger mission for ourselves and the rest of the planet.
                                Discover new concepts, creative design inspiration, and
                                forward-thinking ideas for contemporary, multipurpose living
                                by browsing our archive.
                            </p>
                            <div className="link mt-5 d-flex justify-content-end pb-2">
                                <Button Btitle="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStead

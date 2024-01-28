import Header from '../../helpers/Header/Header';
import lights from '../../assets/images/lights.png';
import shop1 from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpg';
import shop3 from '../../assets/images/shop3.avif';
import shop4 from '../../assets/images/shop4.webp';


import './shop.css';
import ShopCard from '../../helpers/shop Card/ShopCard';

const Shop = () => {
    return (
        <div className='shop mt-5 mb-5 pt-5'>
            <div className="container">
                <Header title="shop" btnDisplat="d-none" />

                <div className="row mt-5">
                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <ShopCard title="sofas" image={shop1} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <ShopCard title="kitchen" image={shop2} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <ShopCard title="tables" image={shop3} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <ShopCard title="lights" image={shop4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop

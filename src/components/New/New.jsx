import Header from "../../helpers/Header/Header"
import ProductCard from "../../helpers/Product Card/ProductCard";
import './new.css';

const New = () => {
    return (
        <div className="new mt-5 mb-5 pt-5">
            <div className="container">
                <Header title="new" dir="catalog" Btitle="browse" />
                <div className="row mt-4 pb-4">
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                    <div className="col-lg-3">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New

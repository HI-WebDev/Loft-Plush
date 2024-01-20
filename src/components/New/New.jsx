import Header from "../../helpers/Header/Header"
import ProductCard from "../../helpers/Product Card/ProductCard";
import products from '../../assets/Data/productsData';

import './new.css';

const New = () => {
    return (
        <div className="new mt-5 mb-5 pt-5">
            <div className="container">
                <Header title="new" dir="catalog" Btitle="browse" />
                <div className="row mt-4 pb-4">
                    {products.map((product, index) => {
                        <div className="col-lg-3" key={index}>
                            <ProductCard products={product} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default New

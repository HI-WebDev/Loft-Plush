import Header from "../../helpers/Header/Header"
import ProductCard from "../../helpers/Product Card/ProductCard";
import products from '../../assets/Data/productsData';

import './new.css';

const New = () => {
    const product = products.slice(4, 8)
    return (
        <div className="new mt-5 mb-5 pt-5">
            <div className="container">
                <Header title="new" dir="catalog" Btitle="browse" />
                <div className="row mt-5 pb-4">
                    {product.map((product, index) => {
                        return (
                            <div className="col-lg-3" key={index}>
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default New

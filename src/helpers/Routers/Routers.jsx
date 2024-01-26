import { Navigate, Route, Routes } from "react-router-dom"
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Catalog from '../../components/catalog/Catalog'
import Contact from '../../components/contact/Contact'
import ProductDetails from '../../components/Product Details/ProductDetails';
import Cart from "../../components/cart/Cart"


const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/hero" />} />
                <Route path="hero" Component={Hero} />
                <Route path="about" Component={About} />
                <Route path="catalog" Component={Catalog} />
                <Route path="/catalog/:id" Component={ProductDetails} />
                <Route path="cart" Component={Cart} />
                <Route path="contact" Component={Contact} />
            </Routes>
        </div>
    )
}

export default Routers

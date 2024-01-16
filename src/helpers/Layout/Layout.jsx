import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Routers from "../Routers/Routers"

const Layout = () => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout

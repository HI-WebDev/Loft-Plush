import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Routers from "../Routers/Routers"

const Layout = () => {
    return (
        <>
            <Navbar />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout

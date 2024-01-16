import { Navigate, Route, Routes } from "react-router-dom"
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Login from '../../components/Login/Login'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/hero" />} />
                <Route path="hero" Component={Hero} />
                <Route path="about" Component={About} />
                <Route path="login" Component={Login} />
            </Routes>
        </div>
    )
}

export default Routers

import { Outlet } from "react-router"
import Footer from "./Footer"
import { Navbar } from "./Navbar"



const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}

export default Root
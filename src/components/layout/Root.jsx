import { Outlet } from "react-router"
import Footer from "../shared/Footer"
import { Navbar } from "../shared/Navbar"



const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}
export default Root
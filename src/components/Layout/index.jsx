import { Outlet } from "react-router-dom";
import Navbar from "./headerMobile/Navbar";
import Footer from "./Footer";
import Desktop from "./headerDesktop/headerDesktop";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Desktop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
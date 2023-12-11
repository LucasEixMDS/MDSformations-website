import Footer from "./components/Layout/Footer.jsx";
import Header from "./components/Layout/headerMobile/Navbar.jsx";
import HeaderDesktop from "./components/Layout/headerDesktop/headerDesktop.jsx"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="backPage">
      <Header />
      <HeaderDesktop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

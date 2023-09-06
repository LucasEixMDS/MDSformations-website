import Footer from "./components/Layout/Footer.jsx";
import Header from "./components/Layout/Navbar.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="backPage">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

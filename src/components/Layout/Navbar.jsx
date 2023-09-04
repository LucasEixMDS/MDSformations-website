import { useRef } from "react";
import logo from "../../assets/logoMDS.svg"
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import plus from "../../assets/plus.svg"
import mobile from "../../assets/mobile.svg"
import loupe from "../../assets/loupe.svg"
import "./Navbar.scss"

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3> <img src={logo} alt="" /> </h3>
            <div className="rightMenu">
            <img src={mobile} alt="" />
            <img src={loupe} alt="" />
			<nav ref={navRef}>
				<a href="/#">Nos formations <img src={plus} alt="" /> </a>
				<a href="/#">Orientation <img src={plus} alt="" /> </a>
				<a href="/">Articles <img src={plus} alt="" /> </a>
				<a href="/test">Chez MDS <img src={plus} alt="" /> </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<img src={close} alt="" />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<img src={menu} alt="" />
			</button>
            </div>
		</header>
	);
}

export default Navbar;

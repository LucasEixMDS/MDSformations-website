import { useRef } from "react";
import logo from "../assets/logoMDS.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"

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
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">My work</a>
				<a href="/#">Blog</a>
				<a href="/#">About me</a>
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
		</header>
	);
}

export default Navbar;

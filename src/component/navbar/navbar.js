import React from "react";
import "./navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<img
					className="navbar__img"
					src="https://toppng.com/uploads/preview/laystation-plus-logo-png-playstation-music-logo-11563034356unzjif5eni.png"
					alt="logo"
				/>
				<div className="navbar__name">Smusic</div>
			</div>
			<ul>
				<li>
					<HomeIcon className="navbar__icon" /> Home
				</li>
				<li>
					<SearchIcon className="navbar__icon" /> Search
				</li>
			</ul>
		</div>
	);
}

export default Navbar;

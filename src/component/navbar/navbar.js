import React from "react";
import "./navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar__logo">
				<Link to="/home" className="navbar__link">
					<img
						className="navbar__img"
						src="https://toppng.com/uploads/preview/laystation-plus-logo-png-playstation-music-logo-11563034356unzjif5eni.png"
						alt="logo"
					/>
					<div className="navbar__name">Smusic</div>
				</Link>
			</div>
			<ul>
				<li>
					<Link to="/home" className="navbar__linkback">
						<HomeIcon className="navbar__icon" /> Home
					</Link>
				</li>
				<li>
					<SearchIcon className="navbar__icon" /> Search
				</li>
				<li>
					<LibraryMusicIcon className="navbar__icon" /> Your Library
				</li>
			</ul>
		</div>
	);
}

export default Navbar;

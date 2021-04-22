import React from "react";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { Link, useHistory } from "react-router-dom";

function Sidebar() {
	const history = useHistory();
	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<Link to="/home" className="sidebar__link">
					<img
						className="sidebar__img"
						src="https://toppng.com/uploads/preview/laystation-plus-logo-png-playstation-music-logo-11563034356unzjif5eni.png"
						alt="logo"
					/>
					<div className="sidebar__name">Smusic</div>
				</Link>
			</div>
			<ul>
				<li onClick={() => history.push("/home")}>
					<HomeIcon className="sidebar__icon" />
					Home
				</li>
				<li>
					<SearchIcon className="sidebar__icon" /> Search
				</li>
				<li onClick={() => history.push("/lovedSongs")}>
					<LibraryMusicIcon className="sidebar__icon" />
					Loved songs
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;

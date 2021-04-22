import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";
import { signOut } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function Header() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.user);
	const logOut = () => {
		dispatch(signOut());
		auth.signOut();
	};
	return (
		<div className="header">
			{user ? (
				<div className="header">
					<div className="header__left">
						<SearchIcon className="header__left-icon" />
						<input placeholder="Search for Artists, Songs" autoComplete="off" />
					</div>
					<div className="header__right">
						<div className="header__right-user">
							<Avatar src="" alt="user" />
							<h4>{user.email}</h4>
						</div>
						<Link to="/signin" className="header__link">
							<div className="header__button" onClick={logOut}>
								Sign out
							</div>
						</Link>
					</div>
				</div>
			) : (
				<Link to="/signin" className="header__link">
					<div className="header__login">
						<div className="header__button">Sign In</div>
					</div>
				</Link>
			)}
		</div>
	);
}

export default Header;

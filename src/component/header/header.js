import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./header.css";
import { signOut } from "../../action/index";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";

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
					<Link to="/signin" className="header__link">
						<div className="header__button" onClick={logOut}>
							Sign out
						</div>
					</Link>
				</div>
			) : (
				<Link to="/signin" className="header__link">
					<div className="header__button">Sign In</div>
				</Link>
			)}
		</div>
	);
}

export default Header;

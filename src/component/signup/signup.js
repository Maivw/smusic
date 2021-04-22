import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signup.css";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signUp } from "../../action/index";

function SignUp() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					signUp({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
				history.push("/home");
			})
			.catch((err) => alert(err.message));
	};

	return (
		<div className="signUp">
			<div>
				<Link to="/">
					<img
						className="signUp__logo"
						src="https://toppng.com/uploads/preview/laystation-plus-logo-png-playstation-music-logo-11563034356unzjif5eni.png"
						a
					/>
				</Link>
			</div>
			<div className="signUp__form">
				<div className="signUp__title">Sign Up</div>
				<div className="signUp__Innerform">
					<input
						placeholder="Email address"
						value={email}
						className="signUp__input"
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						autoComplete="off"
						placeholder="Password"
						className="signUp__input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div
						type="submit"
						className="signUp__button"
						onClick={handleRegister}
					>
						Sign Up
					</div>
				</div>

				<div className="signUp__toSignUp">
					Already have an account ?
					<Link to="/signin" className="signUp__link">
						Sign in now.
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SignUp;

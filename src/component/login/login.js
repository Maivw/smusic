import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../../action/index";

function Login() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("demoUser@gmail.com");
	const [password, setPassword] = useState("password");
	const handleLogin = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					signIn({
						email: userAuth.user.email,
						uid: userAuth.user.uid,
					})
				);
			})
			.catch((err) => alert(err));
	};

	return (
		<div className="login">
			<div>
				<Link to="/">
					<img
						className="login__logo"
						src="https://toppng.com/uploads/preview/laystation-plus-logo-png-playstation-music-logo-11563034356unzjif5eni.png"
						a
					/>
				</Link>
			</div>
			<div className="login__form">
				<div className="login__title">Sign In</div>
				<div className="login__Innerform">
					<input
						placeholder="Email address"
						value={email}
						className="login__input"
						autoComplete="off"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						autoComplete="off"
						placeholder="Password"
						className="login__input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<div type="submit" className="login__button" onClick={handleLogin}>
						Sign In
					</div>
				</div>

				<div className="login__toSignUp">
					New to SMusic?
					<Link to="/signup" className="login__link">
						Sign up now.
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;

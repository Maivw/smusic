import React from "react";
import "./reset.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./component/login/login";
import Home from "./component/home/home";
import Landing from "./component/landing/landing";
import SignUp from "./component/signup/signup";
import Album from "./component/album/album";
import LoveSong from "./component/lovedsong/loveSong";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/home" component={Home} />
					<Route path="/signin" exact={true} component={Login} />
					<Route path="/" exact={true} component={Landing} />
					<Route path="/signup" exact={true} component={SignUp} />
					<Route path="/album/:id" exact={true} component={Album} />
					<Route path="/lovedSongs" exact={true} component={LoveSong} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;

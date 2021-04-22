import React from "react";
import Sidebar from "../sidebar/sidebar";
import "./home.css";
import Header from "../header/header";
import Row from "../Row/row";
import { vietnameseAlbums, foreignAlbums } from "../../data/songs";
function Home() {
	return (
		<div className="container">
			<Header />
			<div className="container__header"></div>
			<div className="container__body-left">
				<Sidebar />
			</div>
			<div className="container__body-right">
				<div className="home__right">
					<div className="home__right-rows">
						<Row title="Vietnamese songs" albums={vietnameseAlbums} key={1} />
						<Row title="Foreign songs" albums={foreignAlbums} key={2} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

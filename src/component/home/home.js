import React from "react";
import Navbar from "../navbar/navbar";
import "./home.css";
import Header from "../header/header";
import Row from "../Row/row";
import { vietnameseAlbums, foreignAlbums } from "../../data/songs";
function Home() {
	return (
		<div className="home__wrapper">
			<Header />
			<div className="home__left">
				<Navbar />
			</div>
			<div className="home__right">
				<div className="home__right-rows">
					<Row title="Vietnamese songs" albums={vietnameseAlbums} />
					<Row title="Foreign songs" albums={foreignAlbums} />
				</div>
				<div className="home__right">
					<div className="home__right-rows">
						<Row title="Vietnamese songs" albums={vietnameseAlbums} />
						<Row title="Foreign songs" albums={foreignAlbums} />
					</div>
				</div>
			</div>
			{/* <div className="home__musicController">hahahha</div> */}
		</div>
	);
}

export default Home;

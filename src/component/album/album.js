import React from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import AlbumBody from "../albumBody/albumBody";
import AlbumFooter from "../albumFooter/albumFooter";
import "./album.css";

function Album() {
	return (
		<div className="album">
			<Header />
			<div className="album__header"></div>
			<div className="album__body-left">
				<Navbar />
			</div>
			<div className="album__body-right">
				<AlbumBody />
			</div>

			<div className="album__footer">
				<AlbumFooter />
			</div>
		</div>
	);
}

export default Album;

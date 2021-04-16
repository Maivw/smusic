import React from "react";
import CardSong from "../cardSong/cardSong";
import "./row.css";

function Row({ title, albums }) {
	return (
		<div className="row">
			<div className="row__title">{title}</div>
			<div className="row__album">
				{albums.map((album) => (
					<CardSong album={album} />
				))}
			</div>
		</div>
	);
}

export default Row;

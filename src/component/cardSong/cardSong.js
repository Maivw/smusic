import React from "react";
import "./cardSong.css";

function CardSong({ album }) {
	console.log("aaa", album);
	return (
		<div>
			<div className="cardSong">
				<div className="cardSong__imgWrapper">
					<img
						className="cardSong__img"
						src={album?.imageUri}
						alt="album image"
					/>
				</div>
				<div className="cardSong__title">{album?.title}</div>
			</div>
		</div>
	);
}

export default CardSong;

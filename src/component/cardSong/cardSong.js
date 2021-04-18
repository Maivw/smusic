import React from "react";
import "./cardSong.css";
import { Link } from "react-router-dom";

function CardSong({ album }) {
	return (
		<Link to={`/album/${album.id}`} className="cardSong__link">
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
		</Link>
	);
}

export default CardSong;

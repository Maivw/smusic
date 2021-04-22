import React from "react";
import "./cardSong.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function CardSong({ album }) {
	const history = useHistory();
	const user = useSelector((state) => state.user.user);
	console.log("user", user);
	return (
		<div>
			{user ? (
				<Link to={`/album/${album.id}`} className="cardSong__link">
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
				</Link>
			) : (
				<Link to="/signin" className="cardSong__link">
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
				</Link>
			)}
		</div>
	);
}

export default CardSong;

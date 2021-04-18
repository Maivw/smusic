import React from "react";
import "./song.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { markFav } from "../../action/index";
import { useDispatch } from "react-redux";

function Song({ songImgUri, numberOfLikes, artist, name, song }) {
	const dispatch = useDispatch();
	const addFavoriteSong = (song) => {
		console.log("songnnn", song);
		dispatch(markFav(song));
	};
	return (
		<div className="song">
			<div className="song__detail">
				<img src={songImgUri} alt="song image" className="song__img" />
				<h4>
					{name} - {artist} <p>Likes: {numberOfLikes}</p>
				</h4>
			</div>
			<div className="song__icon">
				<FavoriteIcon onClick={() => addFavoriteSong(song)} />
			</div>
		</div>
	);
}

export default Song;

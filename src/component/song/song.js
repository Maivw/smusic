import React from "react";
import "./song.css";

function Song({ songImgUri, numberOfLikes, artist, name }) {
	return (
		<div className="song">
			<img src={songImgUri} alt="song image" className="song__img" />
			<div className="song__detail">
				<h4>
					{name} - {artist}{" "}
				</h4>
				<p>Likes: {numberOfLikes}</p>
			</div>
		</div>
	);
}

export default Song;

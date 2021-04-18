import React from "react";
import "./albumBody.css";
import Song from "../song/song";
import { album } from "../../data/songs";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { markFavAlbum } from "../../action/index";
import { useDispatch } from "react-redux";

function AlbumBody() {
	const dispatch = useDispatch();
	const addFavoriteAlbum = (album) => {
		debugger;
		console.log("aaaaaaaaa", album);
		dispatch(markFavAlbum(album));
	};
	return (
		<div className="albumBody">
			<div className="albumBody__info">
				<img
					src="https://res.cloudinary.com/maivw/image/upload/v1616193661/hongnhansong_s4pwsa.jpg"
					alt="image"
					className="albumBody__img"
				/>
				<div className="albumBody__infoText">
					<h2>Hong Nhan</h2>
					<strong>PLAY LIST</strong>
					<p className="albumBody__des">It's awsome</p>
				</div>
			</div>
			<div className="albumBody__songs">
				<div className="albumBody__icons">
					<PlayCircleFilledIcon
						style={{ marginRight: "1rem", fontSize: "3rem" }}
					/>
					<FavoriteIcon
						style={{ marginRight: "1rem" }}
						onClick={() => addFavoriteAlbum(album)}
					/>
					<MoreHorizIcon style={{ marginRight: "1rem" }} />
				</div>
				<div className="albumBody__playlist">Play List</div>
				{album?.songs?.map((song) => (
					<Song
						song={song}
						songImgUri={song.songImgUri}
						numberOfLikes={song.numberOfLikes}
						artist={song.artist}
						name={song.name}
					/>
				))}
			</div>
		</div>
	);
}

export default AlbumBody;

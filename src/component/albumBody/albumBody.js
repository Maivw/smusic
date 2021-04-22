import React, { useState } from "react";
import "./albumBody.css";
import Song from "../song/song";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { markFavAlbum, setCurSong } from "../../action/index";
import { useDispatch, useSelector } from "react-redux";
import MusicControl from "../musicControl/musciControl";

function AlbumBody({ album }) {
	const dispatch = useDispatch();
	const addFavoriteAlbum = (album) => {
		dispatch(markFavAlbum(album));
	};
	const setCurrentSongToPlay = (song) => {
		dispatch(setCurSong(song));
	};
	const currentAlbum = useSelector((state) => state.songs.currentAlbum);
	const curSongToPlay = useSelector((state) => state.songs.currentSong);
	return (
		<div className="albumBody">
			<div className="albumBody__info">
				<img src={album.imageUri} alt="image" className="albumBody__img" />
				<div className="albumBody__inforMusicControl">
					<h2>
						{album.title} - {album.artistHeadline}
					</h2>
					<div className="albumBody__musicCOntrol">
						<MusicControl album={currentAlbum} curSongToPlay={curSongToPlay} />
					</div>
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
						key={song.id}
						song={song}
						songImgUri={song.songImgUri}
						numberOfLikes={song.numberOfLikes}
						artist={song.artist}
						name={song.name}
						updateSong={() => setCurrentSongToPlay(song)}
					/>
				))}
			</div>
		</div>
	);
}

export default AlbumBody;

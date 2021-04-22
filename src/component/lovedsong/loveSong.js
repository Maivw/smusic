import React from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import "./loveSong.css";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { unMarkFav, setCurSong } from "../../action/index";
import MusicControl from "../musicControl/musciControl";

function LoveSong() {
	const dispatch = useDispatch();
	const lovedSongs = useSelector((state) => state.songs.songsFav);
	const loveAlbum = { songs: [...lovedSongs] };

	const onRemoveLovedList = (song) => {
		dispatch(unMarkFav(song));
	};
	const setCurrentSongToPlay = (song) => {
		dispatch(setCurSong(song));
	};
	const curSongToPlay = useSelector((state) => state.songs.currentSong);
	return (
		<div className="container">
			<Header />
			<div className="container__header"></div>
			<div className="container__body-left">
				<Sidebar />
			</div>
			<div className="container__body-right">
				<div className="loveSong__title">Your Loved Songs List</div>
				{lovedSongs ? (
					lovedSongs.map((song) => (
						<div
							className="song"
							key={song.id}
							className="song"
							onClick={() => setCurrentSongToPlay(song)}
						>
							<div className="song__detail">
								<img
									src={song.songImgUri}
									alt="song image"
									className="song__img"
								/>
								<h4>
									{song.name} - {song.artist} <p>Likes: {song.numberOfLikes}</p>
								</h4>
							</div>
							<div className="song__icon">
								<RemoveCircleIcon onClick={() => onRemoveLovedList(song)} />
							</div>
						</div>
					))
				) : (
					<div>Your loved songs list is empty!</div>
				)}
				{lovedSongs && (
					<div className="loveSong__musicControl">
						<MusicControl album={loveAlbum} curSongToPlay={curSongToPlay} />
					</div>
				)}
			</div>
		</div>
	);
}

export default LoveSong;

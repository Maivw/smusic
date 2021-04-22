import React, { useState } from "react";
import "./musicControl.css";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import AudioPlayer from "react-modular-audio-player";
import { setCurSong } from "../../action/index";

function MusicControl({ album, curSongToPlay }) {
	const dispatch = useDispatch();
	const i = album?.songs.find((song) => song.id === curSongToPlay.id);
	console.log("iiii", i);
	// if (album?.songs.find(song => song.id === curSongToPlay.id))
	const listSongs = curSongToPlay
		? [curSongToPlay, ...album?.songs]
		: [...album?.songs];
	console.log("list", listSongs);
	const getPreviousSong = (id) => {
		console.log("id", id);
		const preSongIndex = id - 1 === 0 ? album.songs.length - 1 : id - 2;
		dispatch(setCurSong(album?.songs[preSongIndex]));
	};
	const getNextSong = (id) => {
		const nextSongIndex = id - 1 === album.songs.length - 1 ? 0 : id;
		dispatch(setCurSong(album.songs[nextSongIndex]));
	};
	return (
		<div>
			{album ? (
				<div className="musicControl">
					<div className="musicControl__left">
						<img
							className="musicControl__left-img"
							src={curSongToPlay.songImgUri}
							alt="image album"
						/>
						<div className="musicControl__songDetail">
							<h4>
								{curSongToPlay.name} - {curSongToPlay.artist}
							</h4>
							<p>Likes : {curSongToPlay.numberOfLikes}</p>
						</div>
					</div>
					<div className="musicControl__midle">
						<SkipPreviousIcon
							className="musicControl__icon"
							style={{ cursor: "pointer" }}
							onClick={() => getPreviousSong(curSongToPlay.id)}
						/>
						<div className="musicControl__playerWrapper">
							<ReactPlayer
								url={curSongToPlay.uri}
								width="300px"
								height="50px"
								playing={false}
								controls={true}
								loop={true}
							/>
						</div>
						<SkipNextIcon
							className="musicControl__icon"
							style={{ cursor: "pointer" }}
							onClick={() => getNextSong(curSongToPlay.id)}
						/>
					</div>
					<div className="musicControl__right"></div>
				</div>
			) : (
				<div>loading ....</div>
			)}
		</div>
	);
}

export default MusicControl;

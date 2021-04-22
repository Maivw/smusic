import React, { useState } from "react";
import "./musicControl.css";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import AudioPlayer from "react-modular-audio-player";
const useStyles = makeStyles({
	root: {
		width: "18rem",
	},
});

function MusicControl({ album, curSongToPlay }) {
	const [curSong, setCurSongToPlay] = useState(
		curSongToPlay || album?.songs[0]
	);
	const curIndex = 0;
	let rearrangedPlayer = [
		{
			className: "",
			innerComponents: [
				{
					type: "play",
					style: {
						width: "20rem",
						justifyContent: "center",
						filter: "invert(100%)",
						opacity: "0.4",
					},
				},
			],
		},
	];

	const getPreviousSong = (id) => {
		const preSongIndex = id - 1 === 0 ? album.songs.length - 1 : id - 2;
		setCurSongToPlay(album.songs[preSongIndex] || album?.songs[0]);
	};
	const getNextSong = (id) => {
		const nextSongIndex = id - 1 === album.songs.length - 1 ? 0 : id;
		setCurSongToPlay(album.songs[nextSongIndex]);
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
							<AudioPlayer
								style={{ cursor: "pointer" }}
								audioFiles={[
									{
										src: `${curSongToPlay.uri}`,
										title: `${curSongToPlay.name}`,
										artist: `${curSongToPlay.artist}`,
									},
								]}
								rearrange={rearrangedPlayer}
								playerWidth="6rem"
								iconSize="4rem"
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

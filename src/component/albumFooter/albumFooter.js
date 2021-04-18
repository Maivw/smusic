import React, { useState } from "react";
import "./albumFooter.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
const useStyles = makeStyles({
	root: {
		width: "18rem",
	},
});

function AlbumFooter() {
	const classes = useStyles();
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="albumFooter">
			<div className="albumFooter__left">
				<img
					className="albumFooter__left-img"
					src="https://res.cloudinary.com/maivw/image/upload/v1616095330/hoahaiduong_xf1xiu.jpg"
					alt="image album"
				/>
				<div className="albumFooter__songDetail">
					<h4>No song </h4>
					<p>Blue</p>
				</div>
			</div>
			<div className="albumFooter__midle">
				<ShuffleIcon
					className="albumFooter__blue"
					style={{ cursor: "pointer" }}
				/>
				<SkipPreviousIcon
					className="albumFooter__icon"
					style={{ cursor: "pointer" }}
				/>
				<PlayCircleOutlineIcon
					className="albumFooter__icon"
					style={{ fontSize: 35, cursor: "pointer" }}
				/>
				<SkipNextIcon
					className="albumFooter__icon"
					style={{ cursor: "pointer" }}
				/>
				<RepeatIcon
					className="albumFooter__blue"
					style={{ cursor: "pointer" }}
				/>
			</div>
			<div className="albumFooter__right">
				{/* <Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon style={{ cursor: "pointer" }} />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item className={classes.root}>
						<Slider
							value={value}
							onChange={handleChange}
							aria-labelledby="continuous-slider"
						/>
					</Grid>
				</Grid> */}
				<div className="player-wrapper">
					<ReactPlayer
						className="react-player"
						url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</div>
	);
}

export default AlbumFooter;

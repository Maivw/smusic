import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import AlbumBody from "../albumBody/albumBody";
import AlbumFooter from "../albumFooter/albumFooter";
import "./album.css";
import { getAlbum } from "../../action/index";
import { useDispatch, useSelector } from "react-redux";

function Album(props) {
	const { id } = props.match.params;
	const albums = useSelector((state) => state.songs.albums);
	const currentAlbum = useSelector((state) => state.songs.currentAlbum);
	console.log(" Album", albums);
	console.log("current", currentAlbum);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAlbum(id));
	}, [id]);
	return (
		<div className="album">
			<Header />
			<div className="album__header"></div>
			<div className="album__body-left">
				<Navbar />
			</div>
			<div className="album__body-right">
				{currentAlbum && <AlbumBody album={currentAlbum} />}
			</div>

			<div className="album__footer">
				<AlbumFooter album={currentAlbum} />
			</div>
		</div>
	);
}

export default Album;

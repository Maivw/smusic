import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import AlbumBody from "../albumBody/albumBody";
import "./album.css";
import { getAlbum } from "../../action/index";
import { useDispatch, useSelector } from "react-redux";

function Album(props) {
	const { id } = props.match.params;
	const albums = useSelector((state) => state.songs.albums);
	const currentAlbum = useSelector((state) => state.songs.currentAlbum);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAlbum(id));
	}, [id]);
	return (
		<div className="container">
			<Header />
			<div className="container__header"></div>
			<div className="container__body-left">
				<Sidebar />
			</div>
			<div className="container__body-right">
				{currentAlbum && <AlbumBody album={currentAlbum} />}
			</div>
		</div>
	);
}

export default Album;

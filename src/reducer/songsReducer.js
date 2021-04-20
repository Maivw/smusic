import {
	MARK_FAVORITE,
	REMOVE_FROM_FAVORITE,
	MARK_FAVORITE_ALBUM,
	REMOVE_ALBUM_FROM_FAVORITE,
	GET_ALBUM,
} from "../action/type";
import { vietnameseAlbums, foreignAlbums, album } from "../data/songs";

const INITIAL_STATE = {
	albums: [...vietnameseAlbums, ...foreignAlbums],
	albumsFav: [],
	songsFav: [],
	currentSong: null,
	currentAlbum: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ALBUM:
			console.log("action", action.payload);
			debugger;
			const album = state.albums.filter((al) => al.id === action.payload.id);
			return {
				...state,
				currentAlbum: album,
			};
		case MARK_FAVORITE:
			const i = state.songsFav.findIndex(
				(item) => item.id === action.payload.id
			);
			let newFav = [...state.songsFav];

			if (i < 0) {
				newFav = [...newFav, action.payload];
			}
			return {
				...state,
				songsFav: [...newFav],
			};
		case MARK_FAVORITE_ALBUM:
			const k = state.albumsFav.findIndex(
				(item) => item.id === action.payload.id
			);
			console.log("kkk", k);
			let newFavAlbum = [...state.albumsFav];

			if (k < 0) {
				newFavAlbum = [...newFavAlbum, action.payload];
			}
			return {
				...state,
				albumsFav: [...newFavAlbum],
			};
		case REMOVE_FROM_FAVORITE:
			const index = state.songsFav.findIndex(
				(item) => item.id === action.payload.id
			);
			let newFavList = [...state.songsFav];

			if (index >= 0) {
				newFavList.splice(index, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in List!`
				);
			}
			return {
				...state,
				songsFav: [...newFavList],
			};
		case REMOVE_ALBUM_FROM_FAVORITE:
			const e = state.albumsFav.findIndex(
				(item) => item.id === action.payload.id
			);
			let newAlFavList = [...state.albumsFav];

			if (e >= 0) {
				newAlFavList.splice(e, 1);
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as its not in List!`
				);
			}
			return {
				...state,
				albumsFav: [...newAlFavList],
			};
		default:
			return state;
	}
};

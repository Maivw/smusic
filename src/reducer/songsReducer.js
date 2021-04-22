import {
	MARK_FAVORITE,
	REMOVE_FROM_FAVORITE,
	MARK_FAVORITE_ALBUM,
	REMOVE_ALBUM_FROM_FAVORITE,
	GET_ALBUM,
	SET_CUR_SONG,
} from "../action/type";
import { vietnameseAlbums, foreignAlbums, album } from "../data/songs";

const INITIAL_STATE = {
	albums: [...vietnameseAlbums, ...foreignAlbums],
	albumsFav: [],
	songsFav: [],
	currentSong: {
		id: 2,
		name: "Hong Nhan",
		songImgUri:
			"https://res.cloudinary.com/maivw/image/upload/v1616193661/hongnhansong_s4pwsa.jpg",
		numberOfLikes: "14600000",
		uri:
			"https://res.cloudinary.com/maivw/video/upload/v1618864312/spotifyC/yt1s.com_-_JACK_HO%CC%82%CC%80NG_NHAN_OFFICIAL_MV_G5R_frcosi.mp3",
		artist: "J97",
	},
	currentAlbum: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_CUR_SONG:
			return {
				...state,
				currentSong: action.payload,
			};
		case GET_ALBUM:
			const currentAb = state.albums.find(
				(al) => al.id.toString() === action.payload.toString()
			);
			return {
				...state,
				currentAlbum: currentAb,
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

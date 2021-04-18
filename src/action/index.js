import {
	SIGN_IN,
	SIGN_OUT,
	SIGN_UP,
	MARK_FAVORITE,
	REMOVE_FROM_FAVORITE,
	REMOVE_ALBUM_FROM_FAVORITE,
	MARK_FAVORITE_ALBUM,
} from "./type";
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId,
	};
};

export const signUp = (user) => {
	return {
		type: SIGN_UP,
		payload: user,
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT,
	};
};
export const markFav = (song) => {
	return {
		type: MARK_FAVORITE,
		payload: song,
	};
};

export const unMarkFav = (song) => {
	return {
		type: REMOVE_FROM_FAVORITE,
		payload: song,
	};
};
export const markFavAlbum = (album) => {
	return {
		type: MARK_FAVORITE_ALBUM,
		payload: album,
	};
};

export const unMarkFavAlbum = (album) => {
	return {
		type: REMOVE_ALBUM_FROM_FAVORITE,
		payload: album,
	};
};

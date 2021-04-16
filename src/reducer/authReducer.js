import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../action/type";
const INITIAL_STATE = {
	user: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				user: action.payload,
			};
		case SIGN_OUT:
			return { ...state, user: null };

		case SIGN_UP:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};

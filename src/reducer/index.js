import { createStore, combineReducers, compose } from "redux";
import userReducer from "./authReducer";
import songsReducer from "./songsReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
	key: "root",
	storage,
};
const reducer = combineReducers({
	user: userReducer,
	songs: songsReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const configureStore = (initialState) => {
	return createStore(persistedReducer, initialState, composeEnhancers());
};

export default configureStore;

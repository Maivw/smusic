import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAA6lmgn8rOGcO5_QKiEsBmwpRSDMwRmFw",
	authDomain: "smusick-c0ea7.firebaseapp.com",
	projectId: "smusick-c0ea7",
	storageBucket: "smusick-c0ea7.appspot.com",
	messagingSenderId: "925603430127",
	appId: "1:925603430127:web:650c8638d8ca2af473a51a",
	measurementId: "G-2MRLDB4X8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };

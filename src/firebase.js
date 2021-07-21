import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdvBYh9pwAvKW6wSxAPMRR8sUGompfCPk",
  authDomain: "linkedin-clone-594e3.firebaseapp.com",
  projectId: "linkedin-clone-594e3",
  storageBucket: "linkedin-clone-594e3.appspot.com",
  messagingSenderId: "336448275586",
  appId: "1:336448275586:web:05b7709aed473e314e609b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

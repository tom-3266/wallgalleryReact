import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAwsprgk6NWFzO7ZJNxgCBtWH2UHp6BC78",
  authDomain: "galleryreact-4e803.firebaseapp.com",
  projectId: "galleryreact-4e803",
  storageBucket: "galleryreact-4e803.appspot.com",
  messagingSenderId: "518627003545",
  appId: "1:518627003545:web:3a5721408c8aae0ff47c08",
  measurementId: "G-E17SZTZQC9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectStorage = firebase.storage();

export { projectFirestore, projectStorage };

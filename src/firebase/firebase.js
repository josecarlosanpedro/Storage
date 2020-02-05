import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const config ={
    apiKey: "AIzaSyBJTDqdE_ZV-NxR0mgXfXnn7B-Y1Y1e_54",
    authDomain: "storage-x01.firebaseapp.com",
    databaseURL: "https://storage-x01.firebaseio.com",
    projectId: "storage-x01",
    storageBucket: "storage-x01.appspot.com",
    messagingSenderId: "529681836805",
    appId: "1:529681836805:web:34d088d88e7d8a5cafe56c",
    measurementId: "G-VG7X4YTM5N"
  };

firebase.initializeApp(config);
firebase.analytics();

const auth = firebase.auth();
export { auth };

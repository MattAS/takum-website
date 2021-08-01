import firebase from "firebase/app";
import "firebase/firestore";

const {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGING_SENDERID,
  FIREBASE_APPID,
  FIREBASE_MEASUREMENTID
} = process.env;

export const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENTID
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

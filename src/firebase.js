import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAqq0EsuZnwmlQJHTPfa5pL30T9plw5dos",
    authDomain: "discord-clone-70cc1.firebaseapp.com",
    databaseURL: "https://discord-clone-70cc1.firebaseio.com",
    projectId: "discord-clone-70cc1",
    storageBucket: "discord-clone-70cc1.appspot.com",
    messagingSenderId: "408268202914",
    appId: "1:408268202914:web:57e7e697a01af255be88fb",
    measurementId: "G-53NGFTN5SD"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.googleProvider();
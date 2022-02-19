import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBEtdLVFyyYIyjbRcL0QetRfvZFB7rqTj0",
    authDomain: "redux-store-ba99b.firebaseapp.com",
    projectId: "redux-store-ba99b",
    storageBucket: "redux-store-ba99b.appspot.com",
    messagingSenderId: "223567609848",
    appId: "1:223567609848:web:f709f335c29d354d47200d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

function registerFirebase(email, password, UserName) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            db.collection('users').add({email, UserName})
        })
        .catch((error) => {
            console.log(error)
        });
}

function LoginFireBase(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

export {
    registerFirebase,
    LoginFireBase
}
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDrBxcWRF0iqUtRB3QJT_P0psdZArGYbmM",
  authDomain: "testfirestore-ab507.firebaseapp.com",
  projectId: "testfirestore-ab507",
  storageBucket: "testfirestore-ab507.appspot.com",
  messagingSenderId: "64213095710",
  appId: "1:64213095710:web:b4f1d7f884c021c3f6250f",
  measurementId: "G-5FKWHYWLV6"

};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};
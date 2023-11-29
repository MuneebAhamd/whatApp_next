import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAQZ-sxQO18cPkHKv26_Un_e7eLHm0ktmA",
  authDomain: "whatsapp-b995e.firebaseapp.com",
  projectId: "whatsapp-b995e",
  storageBucket: "whatsapp-b995e.appspot.com",
  messagingSenderId: "755548489465",
  appId: "1:755548489465:web:00acd0fa40f58db00d8428"
  // apiKey: "AIzaSyApTqv_ojz1X--acJR8uBdXg7385kJy6zg",
  // authDomain: "muneeb-20302.firebaseapp.com",
  // projectId: "muneeb-20302",
  // storageBucket: "muneeb-20302.appspot.com",
  // messagingSenderId: "1063722944697",
  // measurementId: "G-F36M75DPN7",
  // appId: "1:1063722944697:web:e83378104e7d5c7facf368",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const rtdb = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
console.log("====googleProvider==",auth); 
export { db, rtdb, auth, googleProvider, githubProvider };

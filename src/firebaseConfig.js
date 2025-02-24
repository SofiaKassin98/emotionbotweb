import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDeBhRNc6NGBmb62CepEGzsD4PbbX_IkCA",
  authDomain: "emotionbotweb.firebaseapp.com",
  databaseURL: "https://emotionbotweb-default-rtdb.firebaseio.com/",
  projectId: "emotionbotweb",
  storageBucket: "emotionbotweb.appspot.com",
  messagingSenderId: "1058659321669",
  appId: "1:116581453720:web:84cb2a3a2f4504f0ae65ed"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDYWzg_2lRhUj-zPuKvkyQC0eb1lk1UMZs",
  authDomain: "manager-4b3e9.firebaseapp.com",
  databaseURL: "https://manager-4b3e9.firebaseio.com",
  projectId: "manager-4b3e9",
  storageBucket: "manager-4b3e9.appspot.com",
  messagingSenderId: "371368232855",
  appId: "1:371368232855:web:d127f9d88bb77000b026d2",
  measurementId: "G-VJRFSSN6GL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

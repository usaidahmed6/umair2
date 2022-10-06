import { initializeApp } from "firebase/app";

import { addDoc, getFirestore, collection, getDocs, deleteDoc, doc, onSnapshot, where, query, setDoc } from 'firebase/firestore'

import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-izIsRh50ipiGLFgvcfEDMNTljLGLr2U",
  authDomain: "todo-81013.firebaseapp.com",
  projectId: "todo-81013",
  storageBucket: "todo-81013.appspot.com",
  messagingSenderId: "316531703066",
  appId: "1:316531703066:web:aced1b633a92a1759a80a3",
  measurementId: "G-R19YQ0BCSQ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

// ref for collection 
const todoRef = collection(db, 'todos');


const auth = getAuth(app)


export {
  db,
  todoRef,
  addDoc,
  app,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  where,
  query,
  collection,
  setDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
}


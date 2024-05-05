import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const colRef = collection(db, "notes");

export function getNotesList() {
  return new Promise((resolve, reject) => {
    getDocs(colRef)
      .then((snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addNewNote(note) {
  return new Promise((resolve, reject) => {
    addDoc(colRef, note)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

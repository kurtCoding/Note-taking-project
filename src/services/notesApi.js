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

export function deleteNote(id) {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "notes", id);
    deleteDoc(docRef)
      .then(() => {
        resolve("Note deleted successfully");
        return;
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateNote(note) {
  const docRef = doc(db, "notes", note.id);
  return new Promise((resolve, reject) => {
    getDoc(docRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          delete note.id;
          resolve(
            updateDoc(docRef, note).then(() => ({
              id: docSnapshot.id,
              ...docSnapshot.data(),
            })),
          );
        } else {
          reject(new Error("Profile not found."));
        }
      })
      .catch((error) => reject(error));
  });
}

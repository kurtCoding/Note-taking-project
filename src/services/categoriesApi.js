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

const colRef = collection(db, "categories");

export function getCategories() {
  console.log('working')
  return new Promise((resolve, reject) => {
    getDocs(colRef)
      .then((snapShot) => {
        const data = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(data,'la data')
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addNewCategory(note) {
  return new Promise((resolve, reject) => {
    addDoc(colRef, note)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function deleteCategory(id) {
  return new Promise((resolve, reject) => {
    const docRef = doc(db, "categories", id);
    deleteDoc(docRef)
      .then(() => {
        resolve("Category deleted successfully");
        return;
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function updateCategory(note) {
  const docRef = doc(db, "categories", note.id);
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
          reject(new Error("Category not found."));
        }
      })
      .catch((error) => reject(error));
  });
}

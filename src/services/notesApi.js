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
export async function getNotesList() {
  try {
    const snapShot = await getDocs(colRef);
    console.log(snapShot)
    const notes = snapShot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(notes, "notes");
  } catch (error) {
    console.log(error);
  }
 
}

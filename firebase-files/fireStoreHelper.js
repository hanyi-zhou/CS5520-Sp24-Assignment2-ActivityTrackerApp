import { collection, addDoc, doc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivityToDB(activityData) {
  try {
    const docRef = await addDoc(
      collection(database, "activities"),
      activityData
    );
    console.log("Activity added with ID: ", docRef.id);
  } catch (err) {
    console.log(err.code);
  }
}

export async function deleteActivityFromDB(id) {
  try {
    await deleteDoc(doc(database, "activities", id));
  } catch (err) {
    console.log(err);
  }
}

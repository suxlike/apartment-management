import { getDues } from "./getdues.js";
export async function getResident() {
  document.querySelector(".resident-update-button").style.display = "block";
  document.querySelector(".resident-card-footer").style.display = "block";
  const db = firebase.firestore();
  const inputValue = document
    .querySelector(".resident-input")
    .value.toLowerCase();
  const residentInfo = document.querySelector(".resident-info");
  const docRef = db.collection("residents").doc(`${inputValue}`);
  const id = document.querySelector(".resident-id");
  try {
    const r = await docRef.get();
    id.textContent = r.id.toUpperCase();
    residentInfo.textContent = `${r.data().name} ${r.data().tel}`;
  } catch (err) {
    console.log("Error getting document:", err);
  }
  getDues();
}

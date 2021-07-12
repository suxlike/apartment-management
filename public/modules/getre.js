import { getDues } from "./getdues.js";
export async function getResident() {
  document.querySelector(".resident-update-button").style.display = "block";
  document.querySelector(".due-month").style.display = "block";
  const db = firebase.firestore();
  const inputValue = document
    .querySelector("#resident-input")
    .value.toLowerCase();
  const landlordName = document.querySelector(".landlord-name");
  const residentName = document.querySelector(".resident-name");
  const residentTel = document.querySelector(".resident-tel");
  const docRef = db.collection("residents").doc(`${inputValue}`);
  const id = document.querySelector(".resident-id");
  try {
    const r = await docRef.get();
    id.textContent = r.id.toUpperCase();
    residentName.textContent = `${r.data().name}`;
    residentTel.textContent = `${r.data().tel}`;
    landlordName.textContent = `${r.data().lord}`;
  } catch (err) {
    id.textContent = "Bulunamadi";
    console.log("Error getting document:", err);
  }
  getDues();
}

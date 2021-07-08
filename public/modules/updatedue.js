import { getDues } from "./getdues.js";
export async function updateDue() {
  const dueMonth = document.querySelector(".due-month");
  const dueInput = document.querySelector(".due-input");
  const db = firebase.firestore();
  const id = document
    .querySelector(`.resident-id`)
    .textContent.toLocaleLowerCase();
  if (dueMonth.value === ``) {
    return;
  }
  try {
    await db
      .collection("residents")
      .doc(`${id}`)
      .collection("2021")
      .doc(`${dueMonth.value}`)
      .set({ due: `${dueInput.value}` });
    console.log("Document successfully updated!");
  } catch (err) {
    console.log("Error getting document:", err);
  }
  getDues();
}

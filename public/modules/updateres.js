import { getResident } from "./getre.js";
export async function updateResSave() {
  const nameInput = document.querySelector("#update-name");
  const telInput = document.querySelector("#update-tel");
  console.log(nameInput.value);
  // document.querySelector(".update-res-div").style.display = `none`;
  const button = document.querySelector(".resident-update-button");
  const db = firebase.firestore();
  const input = document
    .querySelector(".resident-id")
    .textContent.toLocaleLowerCase();
  try {
    await db
      .collection("residents")
      .doc(`${input}`)
      .set({
        name: `${nameInput.value}`,
        tel: `${telInput.value}`,
      });
    console.log("Document successfully written!");
  } catch (err) {
    console.log("Error writing document: ", err);
  }
  // nameInput.value = null;
  // telInput.value = null;
  button.textContent = `Bilgileri Duzenle`;
  button.addEventListener("click", updateResButton);
  getResident();
}
export function updateResButton() {
  const button = document.querySelector(".resident-update-button");
  document.querySelector(".update-res-div").style.display = `flex`;
  button.textContent = `Bilgileri Kaydet`;
  button.addEventListener("click", updateResSave);
}

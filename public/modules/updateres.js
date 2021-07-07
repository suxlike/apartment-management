import { getResident } from "./getre.js";
export async function updateResSave() {
  document.querySelector(".update-res-div").style.display = `none`;
  const button = document.querySelector(".resident-update-button");
  const db = firebase.firestore();
  const input = document.querySelector(".resident-id").textContent;
  const nameInput = document.querySelector("#update-name");
  const telInput = document.querySelector("#update-tel");
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
  button.textContent = `Bilgileri Duzenle`;
  button.addEventListener("click", updateResButton);
  getResident();
}
export function updateResButton() {
    const button = document.querySelector(".resident-update-button");
    document.querySelector(".update-res-div").style.display = `block`;
    button.textContent = `Bilgileri Kaydet`;
    button.addEventListener("click", updateResSave);
  }
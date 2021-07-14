import { getCash } from "./getcash.js";

export async function createCash() {
  const db = firebase.firestore();
  const getDate = document.querySelector("#cash-date-input");
  const getDescription = document.querySelector("#cash-desc-input");
  //   const getIncrease = document.querySelector("#cash-key-input");
  //   const getDecrease = document.querySelector("#cash-key-input");
  let getIncrease = `0`;
  let getDecrease = `0`;
  const cashMonth = document.querySelector(".cash-month");
  let inc = document.querySelector("#increase").checked;

  inc
    ? (getIncrease = document.querySelector("#cash-key-input").value)
    : (getDecrease = document.querySelector("#cash-key-input").value);

  try {
    await db
      .collection("cash")
      .doc("2021")
      .collection(`${cashMonth.value}`)
      .add({
        date: `${getDate.value}`,
        description: `${getDescription.value}`,
        increase: `${getIncrease}`,
        decrease: `${getDecrease}`,
      });
    console.log("Document successfully written!");
  } catch (err) {
    console.log("Error writing document: ", err);
  }
  getCash();
  getDate.value = ``;
  getDescription.value = ``;
  document.querySelector("#cash-key-input").value = ``;
}

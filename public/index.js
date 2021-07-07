import { getDues } from "./getdues.js";
import { getExpenses } from "./getexpenses.js";
const db = firebase.firestore();

const getResidentButton = document.querySelector(".get-resident-button");
getResidentButton.addEventListener("click", getResident);
const dueMonth = document.querySelector(".due-month");
const updateDueButton = document.querySelector(".due-button");
updateDueButton.addEventListener("click", updateDue);
const dueInput = document.querySelector(".due-input");
const expenseMonth = document.querySelector(".expense-month");
const expenseDocInput = document.querySelector("#expense-doc-input");
const expenseKeyInput = document.querySelector("#expense-key-input");
const createExpenseButton = document.querySelector(".create-expense");
createExpenseButton.addEventListener("click", createExpense);
expenseMonth.addEventListener("input", getExpenses);

async function createExpense() {
  try {
    await db
      .collection("expenses")
      .doc("2021")
      .collection(`${expenseMonth.value}`)
      .doc(`${expenseDocInput.value}`)
      .set({
        key: `${expenseKeyInput.value}`,
      });
    console.log("Document successfully written!");
  } catch (err) {
    console.log("Error writing document: ", err);
  }
  getExpenses();
}

async function getResident() {
  const inputValue = document.querySelector(".resident-input").value;
  const residentInfo = document.querySelector(".resident-info");
  const docRef = db.collection("residents").doc(`${inputValue}`);
  const id = document.querySelector(".resident-id");
  try {
    const r = await docRef.get();
    id.textContent = `${r.id}`;
    residentInfo.textContent = `isim: ${r.data().name} 
            tel: ${r.data().tel}`;
  } catch (err) {
    console.log("Error getting document:", err);
  }
  getDues();
}

async function updateDue() {
  const id = document.querySelector(`.resident-id`);
  try {
    await db
      .collection("residents")
      .doc(`${id.textContent}`)
      .collection("2021")
      .doc(`${dueMonth.value}`)
      .update({ due: `${dueInput.value}` });
    console.log("Document successfully updated!");
  } catch (err) {
    console.log("Error getting document:", err);
  }
  getDues();
}

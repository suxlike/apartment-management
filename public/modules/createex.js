import { getExpenses } from "./gete.js";
export async function createExpense() {
  const db = firebase.firestore();
  const expenseDocInput = document.querySelector("#expense-doc-input");
  const expenseKeyInput = document.querySelector("#expense-key-input");
  const expenseMonth = document.querySelector(".expense-month");
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

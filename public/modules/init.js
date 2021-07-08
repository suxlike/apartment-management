import { getExpenses } from "./gete.js";
import { createExpense } from "./createex.js";
import { getResident } from "./getre.js";
import { updateDue } from "./updatedue.js";
import { updateResButton } from "./updateres.js";
import { show } from "./duebutton.js";
import { getIncomes } from "./getincomes.js";
import { login } from "./signin.js";

export function init() {
  document
    .querySelector(".get-resident-button")
    .addEventListener("click", getResident);
  document.querySelector(".due-button").addEventListener("click", updateDue);
  document
    .querySelector(".expense-month")
    .addEventListener("input", getExpenses);
  document
    .querySelector(".create-expense")
    .addEventListener("click", createExpense);
  document
    .querySelector(".resident-update-button")
    .addEventListener("click", updateResButton);
  document.querySelector(".due-month").addEventListener("input", show);
  document.querySelector(".income-month").addEventListener("input", getIncomes);
  document.querySelector(".login-button").addEventListener("click", login);
}

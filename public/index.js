import { getExpenses } from "./modules/gete.js";
import { createExpense } from "./modules/createex.js";
import { getResident } from "./modules/getre.js";
import { updateDue } from "./modules/updatedue.js";
import { updateResButton } from "./modules/updateres.js";

window.addEventListener("load", init);
function init() {
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
}

document
  .querySelector(".resident-update-button")
  .addEventListener("click", updateResButton);



import { getResident } from "./getre.js";
export function createBlock() {
  for (let i = 1; i <= 27; i++) {
    let blck = document.createElement("button");
    blck.classList.add(`block-element`);
    blck.classList.add(`a${i}`);
    document.querySelector(".ablock").append(blck);
    blck.textContent = `A${i}`;
    blck.addEventListener("click", (e) => {
      document.querySelector("#resident-input").value =
        e.target.textContent.toLocaleLowerCase();
      getResident();
    });
  }

  for (let i = 1; i <= 20; i++) {
    let bblck = document.createElement("button");
    bblck.classList.add(`block-element`);
    bblck.classList.add(`b${i}`);
    document.querySelector(".bblock").append(bblck);
    bblck.textContent = `B${i}`;
    bblck.addEventListener("click", (e) => {
      document.querySelector("#resident-input").value =
        e.target.textContent.toLocaleLowerCase();
      getResident();
    });
  }

  for (let i = 1; i <= 15; i++) {
    let bblck = document.createElement("button");
    bblck.classList.add(`block-element`);
    bblck.classList.add(`c${i}`);
    document.querySelector(".cblock").append(bblck);
    bblck.textContent = `C${i}`;
    bblck.addEventListener("click", (e) => {
      document.querySelector("#resident-input").value =
        e.target.textContent.toLocaleLowerCase();
      getResident();
    });
  }
}

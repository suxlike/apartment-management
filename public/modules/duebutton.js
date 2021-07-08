export function show(e) {
  if (e.target.value !== "") {
    document.querySelector(".due-button").style.display = "block";
    document.querySelector(".due-input").style.display = "block";
  }
}

export function show(e) {
  const button = document.querySelector(".due-button");
  if (e.target.value !== "") {
    button.style.display = "block";
  }
}

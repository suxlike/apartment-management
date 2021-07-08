export async function login() {
  const email = "admin@admin.com";
  const password = document.querySelector("#login-pw").value;
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    document.querySelector(".content").style.display = "grid";
    document.querySelector(".login-div").style.display = "none";
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.error(errorCode, errorMessage);
    document.querySelector(".err").textContent = `${errorMessage}`;
  }
}
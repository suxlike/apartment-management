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

async function getExpenses() {
  document.querySelector(".items-title").textContent = `${expenseMonth.value}`;
  const itemsSpan = document.querySelectorAll(".items span");
  itemsSpan.forEach((item) => {
    item.remove();
  });
  const items = document.querySelector(".items");
  const createSpan = function (doc) {
    const a = document.createElement("span");
    items.append(a);
    a.textContent = `${doc.id} ${doc.data().key}`;
  };
  try {
    let expenses = await db
      .collection("expenses")
      .doc(`2021`)
      .collection(`${expenseMonth.value}`)
      .get();
    expenses.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      createSpan(doc);
    });
  } catch (err) {
    console.log("Error getting document:", err);
  }
}

function getResident() {
  const inputValue = document.querySelector(".resident-input").value;
  const residentInfo = document.querySelector(".resident-info");
  const docRef = db.collection("residents").doc(`${inputValue}`);
  const id = document.querySelector(".resident-id");
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        id.textContent = `${doc.id}`;
        residentInfo.textContent = `isim: ${doc.data().name} 
        tel: ${doc.data().tel}`;
      } else {
        // doc.data() will be undefined in this case
        residentInfo.textContent = `bulunamadi`;
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });

  db.collection("residents")
    .doc(`${inputValue}`)
    .collection("2021")
    .get()
    .then((qs) => {
      qs.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        document.querySelector(`.${doc.id}`).textContent = `${doc.id}: 
        ${doc.data().due}`;
      });
    });
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
  db.collection("residents")
    .doc(`${id.textContent}`)
    .collection("2021")
    .get()
    .then((qs) => {
      qs.forEach((doc) => {
        console.log(doc.data().due);
        // doc.data() is never undefined for query doc snapshots
        document.querySelector(`.${doc.id}`).textContent = `${doc.id}: 
        ${doc.data().due}`;
      });
    });
}

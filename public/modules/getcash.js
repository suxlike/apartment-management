export async function getCash() {
  // display selected month
  (function () {
    document.querySelector(".cash-set-box").style.display = "flex";
    const expenseMonth = document.querySelector(".cash-month");
    document.querySelector(".cash-title").textContent = `${expenseMonth.value}`;
  })();
  //remove existing elements
  (function () {
    //   document.querySelector(".expense-total").textContent = ``;
    const itemsSpan = document.querySelectorAll(
      ".get-cash-box span,.get-cash-box button"
    );
    itemsSpan.forEach((item) => {
      item.remove();
    });
  })();

  function createSpan(doc) {
    const dateDiv = document.querySelector("#getDate");
    const descDiv = document.querySelector("#getDescription");
    const incDiv = document.querySelector("#getIncrease");
    const decDiv = document.querySelector("#getDecrease");
    const dateSpan = document.createElement("span");
    dateDiv.append(dateSpan);
    dateSpan.textContent = `${doc.data().date}`;
    const descriptionSpan = document.createElement("span");
    descDiv.append(descriptionSpan);
    descriptionSpan.textContent = `${doc.data().description}`;
    const increaseSpan = document.createElement("span");
    incDiv.append(increaseSpan);
    increaseSpan.textContent = `${doc.data().increase}`;
    const decreaseSpan = document.createElement("span");
    decDiv.append(decreaseSpan);
    decreaseSpan.textContent = `${doc.data().decrease}`;
    const button = document.createElement("button");
    const deleteDiv = document.querySelector("#delete");
    deleteDiv.append(button);
    button.textContent = "Sil";
    const del = async function (doc) {
      try {
        console.log(doc.id);
        const expenseMonth = document.querySelector(".cash-month");
        const db = firebase.firestore();
        let toDel = await db
          .collection("cash")
          .doc(`2021`)
          .collection(`${expenseMonth.value}`)
          .doc(`${doc.id}`)
          .delete();
      } catch (err) {
        console.log(err);
      }
      getCash();
    };
    button.addEventListener("click", function () {
      del(doc);
    });
  }
  try {
    const expenseMonth = document.querySelector(".cash-month");
    const balance = document.createElement("span");
    const balanceDiv = document.querySelector("#getBalance");
    balanceDiv.append(balance);
    const db = firebase.firestore();
    if (expenseMonth.value === ``) {
      return;
    }
    let cash = await db
      .collection("cash")
      .doc(`2021`)
      .collection(`${expenseMonth.value}`)
      .get();
    let sum = 0;
    cash.forEach((doc) => {
      sum += Number(doc.data().increase) - Number(doc.data().decrease);
      balance.textContent = ` ${sum}`;
      createSpan(doc);
    });
  } catch (err) {
    console.log("Error getting document:", err);
  }
}

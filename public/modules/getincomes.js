function createSpan(rIds, r, i) {
  const items = document.querySelector(".income-list");
  let spanEle = document.createElement("span");
  items.append(spanEle);
  const text = `${rIds[i]}: ${r.data().due}`;
  spanEle.textContent = text.toUpperCase();
}

export async function getIncomes() {
  const db = firebase.firestore();
  const month = document.querySelector(`.income-month`);

  if (month.value === ``) {
    document.querySelector(".incomes").textContent = `Ay Sec`;
    return;
  }
  document.querySelector(".incomes-title").textContent = `${month.value}`;
  const rIds = [
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12",
    "a13",
    "a14",
    "a15",
    "a16",
    "a17",
    "a18",
    "a19",
    "a20",
    "a21",
    "a22",
    "a23",
    "a24",
    "a25",
    "a26",
    "a27",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "b10",
    "b11",
    "b12",
    "b13",
    "b14",
    "b15",
    "b16",
    "b17",
    "b18",
    "b19",
    "b20",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "c9",
    "c10",
    "c11",
    "c12",
    "c13",
    "c14",
    "c15",
  ];
  let sum = 0;
  try {
    for (let i = 0; i < rIds.length; i++) {
      async function gr() {
        let r = await db
          .collection("residents")
          .doc(`${rIds[i]}`)
          .collection("2021")
          .doc(`${month.value}`)
          .get();
        sum += Number(r.data().due);
        document.querySelector(".incomes").textContent = `Toplam: ${sum}`;
        if (Number(r.data().due > 0)) {
          createSpan(rIds, r, i);
          console.log(`${rIds[i]}: ${r.data().due}`);
        }
      }
      gr();
    }
  } catch (err) {
    console.log(err);
  }
}

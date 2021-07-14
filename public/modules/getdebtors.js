  function createSpanN(rIds, r, i) {
    const debtorsList = document.querySelector(".debtors-list");
    const createSpanE = document.createElement("span");
    debtorsList.append(createSpanE);
    const text = `${rIds[i]}: ${r.data().due}`;
    createSpanE.textContent = text.toUpperCase();
  }
  function clearSpan() {
    const debtorsList = document.querySelectorAll(".debtors-list span");
    debtorsList.forEach((item) => item.remove());
  }
  export async function getDebtors() {
    clearSpan();
    const db = firebase.firestore();
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
    try {
      for (let i = 0; i < rIds.length; i++) {
        async function getR() {
            try{
          let r = await db
            .collection("residents")
            .doc(`${rIds[i]}`)
            .collection("2021")
            .doc(`Borc`)
            .get()
            
            if (Number(r.data().due) > 0) 
                {createSpanN(rIds, r, i)}
        }catch(err){console.error(err)}
      }
      getR();
    }} catch (err) {
      console.log(err);
    }
  }
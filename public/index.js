const db = firebase.firestore();

const getResidentButton = document.querySelector(".get-resident-button");
getResidentButton.addEventListener("click", getResident);
const dueMonth = document.querySelector(".due-month");
const updateDueButton = document.querySelector(".due-button");
updateDueButton.addEventListener("click", updateDue);
const dueInput = document.querySelector(".due-input");

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

function updateDue() {
  const id = document.querySelector(`.resident-id`);
  const due = db
    .collection("residents")
    .doc(`${id.textContent}`)
    .collection("2021")
    .doc(`${dueMonth.value}`);
  due
    .update({
      due: `${dueInput.value}`,
    })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });

  db.collection("residents")
    .doc(`${id.textContent}`)
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

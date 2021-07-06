// const db = firebase.firestore();

// const docRef = db
//   .collection("residents")
//   .doc("A1")
//   .collection("dues")
//   .doc("2021");

// docRef
//   .get()
//   .then((doc) => {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//     } else {
//       // doc.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   })
//   .catch((error) => {
//     console.log("Error getting document:", error);
//   });

// //  get all residents
// db.collection("residents")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   });

// //  GET A Document
// var docRef = db.collection("cities").doc("SF");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// update
// var washingtonRef = db.collection("cities").doc("DC");

// Set the "capital" field of the city 'DC'
// return washingtonRef.update({
//     capital: true
// })
// .then(() => {
//     console.log("Document successfully updated!");
// })
// .catch((error) => {
//     // The document probably doesn't exist.
//     console.error("Error updating document: ", error);
// });
//

// Add a new document in collection "cities"
// function
db.collection("expenses")
  .doc("2021")
  .collection(`${expenseMonth}`)
  .doc(`${expenseDocInput}`)
  .set({
    key: `${expenseKeyInput}`,
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
//
//
//
//

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

async function updateDue() {
  try {
    await db
      .collection("residents")
      .doc(`${id.textContent}`)
      .collection("2021")
      .doc(`${dueInput.value}`)
      .update({ due: `${dueInput.value}` });
    console.log("Document successfully updated!");
  } catch (err) {
    console.log("Error getting document:", err);
  }
}
// 

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

    async function
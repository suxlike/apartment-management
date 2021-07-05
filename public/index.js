const db = firebase.firestore();

const getResidentButton = document.querySelector(".get-resident-button");
getResidentButton.addEventListener("click", getResident);

function getResident() {
  const inputValue = document.querySelector(".resident-input").value;
  const residentInfo = document.querySelector(".resident-info");
  const docRef = db.collection("residents").doc(`${inputValue}`);
  const id = document.querySelector(".resident-id");
  const jan = document.querySelector(".jan");
  const feb = document.querySelector(".feb");
  const mar = document.querySelector(".mar");
  const apr = document.querySelector(".apr");
  const may = document.querySelector(".may");
  const jun = document.querySelector(".jun");
  const jul = document.querySelector(".jul");
  const aug = document.querySelector(".aug");
  const sep = document.querySelector(".sep");
  const oct = document.querySelector(".oct");
  const nov = document.querySelector(".nov");
  const dec = document.querySelector(".dec");

  id.textContent = `${inputValue}`;

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
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
  const due = db
    .collection("residents")
    .doc(`${inputValue}`)
    .collection("dues")
    .doc("2021");

  due
    .get()
    .then((doc) => {
      if (doc.exists) {
        jan.textContent = `Ocak: ${doc.data().jan}`;
        feb.textContent = `Subat: ${doc.data().feb}`;
        mar.textContent = `Mart: ${doc.data().mar}`;
        apr.textContent = `Nisan: ${doc.data().apr}`;
        may.textContent = `Mayis: ${doc.data().may}`;
        jun.textContent = `Haziran: ${doc.data().jun}`;
        jul.textContent = `Temmuz: ${doc.data().jul}`;
        aug.textContent = `Agustos: ${doc.data().aug}`;
        sep.textContent = `Eylul: ${doc.data().sep}`;
        oct.textContent = `Ekim: ${doc.data().oct}`;
        nov.textContent = `Kasim: ${doc.data().nov}`;
        dec.textContent = `Aralik: ${doc.data().dec}`;

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");   
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

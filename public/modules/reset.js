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

// export async function RESET_DATABASE_ID() {
//   const db = firebase.firestore();
//   try {
//     for (let i = 0; i < rIds.length; i++) {
//       await db
//         .collection("residents")
//         .doc(`${rIds[i]}`)
//         .set({ name: "Ad Soyad", tel: "" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export function RESET_DATABASE() {
//   const rIds = [
//     "a1",
//     "a2",
//     "a3",
//     "a4",
//     "a5",
//     "a6",
//     "a7",
//     "a8",
//     "a9",
//     "a10",
//     "a11",
//     "a12",
//     "a13",
//     "a14",
//     "a15",
//     "a16",
//     "a17",
//     "a18",
//     "a19",
//     "a20",
//     "a21",
//     "a22",
//     "a23",
//     "a24",
//     "a25",
//     "a26",
//     "a27",
//     "b1",
//     "b2",
//     "b3",
//     "b4",
//     "b5",
//     "b6",
//     "b7",
//     "b8",
//     "b9",
//     "b10",
//     "b11",
//     "b12",
//     "b13",
//     "b14",
//     "b15",
//     "b16",
//     "b17",
//     "b18",
//     "b19",
//     "b20",
//     "c1",
//     "c2",
//     "c3",
//     "c4",
//     "c5",
//     "c6",
//     "c7",
//     "c8",
//     "c9",
//     "c9",
//     "c10",
//     "c11",
//     "c12",
//     "c13",
//     "c14",
//     "c15",
//   ];
//   for (let n = 0; n < rIds.length; n++) {
//     RESET_DATABASE_MONTH(rIds[n]);
//   }
// }

// async function RESET_DATABASE_MONTH(id) {
//   const db = firebase.firestore();
//   try {
//     const rMonths = [
//       "Ocak",
//       "Subat",
//       "Mart",
//       "Nisan",
//       "Mayis",
//       "Haziran",
//       "Temmuz",
//       "Agustos",
//       "Eylul",
//       "Ekim",
//       "Kasim",
//       "Aralik",
//     ];
//     for (let i = 0; i < rMonths.length; i++) {
//       await db
//         .collection("residents")
//         .doc(`${id}`)
//         .collection("2021")
//         .doc(`${rMonths[i]}`)
//         .set({ due: "0" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// export async function ADD_Debt() {
//   const db = firebase.firestore();
//   try {
//     for (let i = 0; i < rIds.length; i++) {
//       await db
//         .collection("residents")
//         .doc(rIds[i])
//         .collection("2021")
//         .doc("Borc")
//         .set({ due: "0" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

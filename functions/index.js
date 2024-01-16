const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createUser = functions.auth.user().onCreate((user) => {
  const firestore = admin.firestore();
  const document = firestore.collection("users").doc(user.uid);
  const data = {
    uid: user.uid,
  };
  return document.set(data);
});

exports.deleteUser = functions.auth.user().onDelete((user) => {
  const firestore = admin.firestore();
  const document = firestore.collection("users").doc(user.uid);
  return document.delete();
});

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

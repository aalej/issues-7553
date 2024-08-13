const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");

const app = admin.initializeApp();

const db = admin.firestore(app);

exports.helloWorld = onRequest(async (request, response) => {
    const snapshot = await db.collection('widgets').get(); // Makes a request to the Firestore emulator
    const docData = []
    for (let doc of snapshot.docs) {
        docData.push(doc.data())
    }
    response.json({ docs: docData });
});

const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const functions = require('firebase-functions');

admin.initializeApp();

async function addAnalyticsEvent(req, res) {
    const body = JSON.parse(req.body);
    const writeResult = await admin.firestore().collection('analyticsEvents').add(body);
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
}

async function addSolve(req, res) {
    const body = JSON.parse(req.body);
    const writeResult = await admin.firestore().collection('solves').add(body);
    res.json({ solveID: writeResult.id });
}

async function getSolve(req, res) {
    const body = JSON.parse(req.body);
    const solveID = body.solveID;
    const docSnapshot = await admin.firestore().collection('solves').doc(solveID).get();
    res.json(docSnapshot.data());
}

async function getSolves(req, res) {
    const body = JSON.parse(req.body);
    const uid = body.uid;
    const querySnapshot = await admin
        .firestore()
        .collection('solves')
        .where('uid', '==', uid)
        .orderBy('timestamp')
        .get();
    const output = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    }));
    res.json(output);
}

function onRequest(handler) {
    return functions.https.onRequest((req, res) => {
        cors(req, res, () => {
            res.setHeader("Access-Control-Allow-Origin", "https://cubingapp.com")
            handler(req, res);
        });
    });
}

exports.addAnalyticsEvent = onRequest(addAnalyticsEvent);
exports.addSolve = onRequest(addSolve);
exports.getSolve = onRequest(getSolve);
exports.getSolves = onRequest(getSolves);
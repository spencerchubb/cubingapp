const admin = require('firebase-admin');
const cors = require('cors');
const express = require('express');
const functions = require('firebase-functions');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
    const body = JSON.parse(req.body);
    const writeResult = await admin.firestore().collection('analyticsEvents').add(body);
    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.addAnalyticsEvent = functions.https.onRequest(app);

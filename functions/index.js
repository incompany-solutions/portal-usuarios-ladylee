const functions = require("firebase-functions");
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var whitelist = [
    'http://127.0.0.1:4200',
    'http://localhost:4200',
    'https://ladylee-angular.web.app'
];
var corsOptions = {
    origin: whitelist
}

var requestConfig = {
    method: 'post',
    url: 'https://test.salesforce.com/services/oauth2/token?client_id=3MVG9N35s_jHNF.F2bP8Ix6voVWTAr0HC4GHhPa4oRIRRPtg3U_oesx4w886i_pulX8_H_23hXjYygdm.gVYo&username=ladylee@incompany.cr.partialQA&password=@Incompany2021&grant_type=password&client_secret=471CD83BE63A3D36869F0A1B0E877945D055149512E18385DA089255F1123EE6'
};


app.use(cors())

app.post('/getToken', (request, response) => {
    axios(requestConfig)
        .then(function (res) {
            response.send(res.data);
            return null;
        })
        .catch(function (error) {
            functions.logger.error("Authentication error!", error);
            response.status(401).send({ error: 'Authentication error!' });
            return null;
        });
});

exports.app = functions.https.onRequest(app);
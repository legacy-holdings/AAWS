// Legacy Holdings LLC Confidential 2017
// All Rights Reserved


// TODO: Migrate to google's officially supported API client
// https://github.com/google/google-api-nodejs-client

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const request = require("request");

const AWS_SDK = require("aws-sdk");
AWS_SDK.config.loadFromPath("./config.json");


const s3Params = {};

const S3 = new AWS_SDK.S3();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/v1/api/postUserGeoLoc", (req, res) => {
//     res.setHeader("content-type", "application/json");
//     res.setHeader("content-type", "application/x-www-form-urlencoded");
//     res.setHeader("access-control-allow-origin", "*");
//     res.setHeader("access-control-allow-credentials", true);
//     res.json({ success: "success" });

//   // console.log(req.body)
//   // Save requests body { navigator.gelocation object -- see Mozilla }
//     geolocationSearchPlacesRequestFunc(req.body);
// });

app.post("/v1/api/s3BucketInfo", (req, res) => {
    res.setHeader("content-type", "application/json");
    res.setHeader("content-type", "application/x-www-form-urlencoded");
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-credentials", true);

    res.json({ s3BucketInfo: req.body });
});

app.get("/v1/api/createS3Bucket", (req, res) => {
    res.setHeader("content-type", "application/json");
    res.setHeader("content-type", "application/x-www-form-urlencoded");
    res.setHeader("access-control-allow-origin", "*");
    res.setHeader("access-control-allow-credentials", true);

    var myBucket = "ah.stdudybank-v1";

    var myKey = "Cornerstone1!";

    return new Promise(() => {
        S3.createBucket({ Bucket: myBucket }, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                params = { Bucket: myBucket, Key: myKey, Body: "Hello!" };

                S3.putObject(params, function(err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        res.send({ data: data });

                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            }
        });
    });
});


app.listen(9001);
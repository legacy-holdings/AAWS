const AWS_SDK = require("aws-sdk");

console.log("------------------------------------------");
// console.log(AWS_SDK);
console.log("------------------------------------------");

const s3Params = {};

const S3 = new AWS_SDK.S3();

// ------------------ Config -------------------
S3.config.credentials = {
    accessKeyId: "AKIAISNLKYQVUUZL6THA",
    secretAccessKey: "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"
};
S3.config.credentialProvider.accessKeyId = "AKIAISNLKYQVUUZL6THA";
S3.config.credentialProvider.secretAccessKey =
  "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";
S3.config.region = "us-east-2b";
S3.region = "us-east-2b";
// ----------------------------------------------

// console.log(S3);

var myBucket = "aws..test.name";

var myKey = "myBucketKey";

S3.createBucket({ Bucket: myBucket }, function(err, data) {
    if (err) {
        console.log(err);
    } else {
        params = { Bucket: myBucket, Key: myKey, Body: "Hello!" };

        S3.putObject(params, function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log("Successfully uploaded data to myBucket/myKey");
            }
        });
    }
});

// EC2.acceptReservedInstancesExchangeQuote(ec2Params, function(err, data) {
//     if (err)
//         console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// console.log(ec2);

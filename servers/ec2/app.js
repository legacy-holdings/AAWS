const AWS_SDK = require("aws-sdk");

console.log("------------------------------------------");
// console.log(AWS_SDK);
console.log("------------------------------------------");

const ec2Params = {
    ReservedInstanceIds: ["i-04fd1c09d271eae60"]
};

const EC2 = new AWS_SDK.EC2();

// ------------------ Config -------------------
EC2.config.credentials = {
    accessKeyId: "AKIAISNLKYQVUUZL6THA",
    secretAccessKey: "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"
};
EC2.config.credentialProvider.accessKeyId = "AKIAISNLKYQVUUZL6THA";
EC2.config.credentialProvider.secretAccessKey =
  "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";
EC2.config.region = "us-east-2b";
EC2.region = "us-east-2b";
// ----------------------------------------------




// EC2.acceptReservedInstancesExchangeQuote(ec2Params, function(err, data) {
//     if (err)
//         console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// console.log(ec2);

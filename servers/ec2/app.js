const AWS_SDK = require("aws-sdk");
AWS_SDK.config.loadFromPath("./config.json");

console.log("------------------------------------------");
// console.log(AWS_SDK);
console.log("------------------------------------------");

// const ec2Params = {
//     ReservedInstanceIds: ["i-04fd1c09d271eae60"]
// };

const EC2 = new AWS_SDK.EC2({ apiVersion: "2016-11-15" });

// ------------------ Config -------------------
// EC2.config.credentials = {
//     accessKeyId: "AKIAISNLKYQVUUZL6THA",
//     secretAccessKey: "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"
// };
// EC2.config.credentialProvider.accessKeyId = "AKIAISNLKYQVUUZL6THA";
// EC2.config.credentialProvider.secretAccessKey =
//   "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";
// EC2.config.region = "us-east-2b";
// EC2.region = "us-east-2b";
// ----------------------------------------------

const params = {
    ImageId: "ubuntu/images/hvm-ssd/ubuntu-xenial-16.04-amd64-server-20170414", // amzn-ami-2011.09.1.x86_64-ebs
    InstanceType: "t2.micro",
    MinCount: 1,
    MaxCount: 1
};

// Create the instance
EC2.runInstances(params, function(err, data) {
    if (err) {
        console.log("Could not create instance", err);
        return;
    }
    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
  // Add tags to the instance
    params = {
        Resources: [instanceId],
        Tags: [
            {
                Key: "Name",
                Value: "SDK Sample"
            }
        ]
    };
    EC2.createTags(params, function(err) {
        console.log("Tagging instance", err ? "failure" : "success");
    });
});

// EC2.acceptReservedInstancesExchangeQuote(ec2Params, function(err, data) {
//     if (err)
//         console.log(err, err.stack); // an error occurred
//     else console.log(data); // successful response
// });

// console.log(ec2);

const AWS_SDK = require("aws-sdk");

console.log("------------------------------------------");
// console.log(AWS_SDK);
console.log("------------------------------------------");

// const ec2Params = {
//     accessKeyId: "AKIAISNLKYQVUUZL6THA",
//     secretAccessKey: "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",
//     region: "us-east-2a",
//     apiVersion: "2017-06-14"
// };

const params = {
    ApplicationName: "my-app-from-node-dav1",
    Description: "my application :)"
  // Region: "us-east-2a",
  // AccessKeyId: "AKIAISNLKYQVUUZL6THA",
  // SecretAccessKey: "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"
};

const ep = new AWS_SDK.Endpoint('https://elasticbeanstalk.us-west-2.amazonaws.com');
const ELASTIC_BEANSTALK = new AWS_SDK.ElasticBeanstalk();

// Config Settings
ELASTIC_BEANSTALK.config.credentials = {
    accessKeyId: "AKIAISNLKYQVUUZL6THA",
    secretAccessKey: "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"
};
ELASTIC_BEANSTALK.config.credentialProvider.accessKeyId =
  "AKIAISNLKYQVUUZL6THA";
ELASTIC_BEANSTALK.config.credentialProvider.secretAccessKey =
  "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";
ELASTIC_BEANSTALK.config.region = "us-west-2";
ELASTIC_BEANSTALK.region = "us-west-2";
ELASTIC_BEANSTALK.config.endpoint = ep;

ELASTIC_BEANSTALK.createApplication(params, function(err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
  /*
   data = {
    Application: {
     ApplicationName: "my-app", 
     ConfigurationTemplates: [
     ], 
     DateCreated: <Date Representation>, 
     DateUpdated: <Date Representation>, 
     Description: "my application"
    }
   }
   */
});

console.log(ELASTIC_BEANSTALK);

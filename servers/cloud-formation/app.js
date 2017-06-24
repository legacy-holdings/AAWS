const AWS_SDK = require("aws-sdk");
AWS_SDK.config.loadFromPath("./config.json");

console.log("------------------------------------------");
// console.log(AWS_SDK);
console.log("------------------------------------------");

const CloudFormation = new AWS_SDK.CloudFormation({ apiVersion: "2010-05-15" });

const params = {
    StackName: "StudyBankCommandLine" /* required */,
  //   Capabilities: [
  //     CAPABILITY_IAM | CAPABILITY_NAMED_IAM,
  //     /* more items */
  //   ],
  //   ClientRequestToken: 'STRING_VALUE',
    DisableRollback: true || false,
  //   NotificationARNs: [
  //     'STRING_VALUE',
  //     /* more items */
  //   ],
  //   OnFailure: DO_NOTHING | ROLLBACK | DELETE,
  //   Parameters: [
  //     {
  //       ParameterKey: 'STRING_VALUE',
  //       ParameterValue: 'STRING_VALUE',
  //       UsePreviousValue: true || false
  //     },
  //     /* more items */
  //   ],
  //   ResourceTypes: [
  //     'STRING_VALUE',
  //     /* more items */
  //   ],
  //   RoleARN: 'STRING_VALUE',
  //   StackPolicyBody: 'STRING_VALUE',
  //   StackPolicyURL: 'STRING_VALUE',
  //   Tags: [
  //     {
  //       Key: 'STRING_VALUE',
  //       Value: 'STRING_VALUE'
  //     },
  //     /* more items */
  //   ],
    // TemplateBody: 'STRING_VALUE',
    // TemplateURL: 'https://s3.amazonaws.com/ah.studybank-v1/Cornerstone1!',
    TimeoutInMinutes: 1
};
CloudFormation.createStack(params, function(err, data) {
    if (err)
        console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
});

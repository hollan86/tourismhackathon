var Conversation = require('watson-developer-cloud/conversation/v1');

// var conversation = watson.conversation({
//   username: '{450a0309-8dea-4206-8bc4-0149b8be93ec}',
//   password: '{zsQBZHk32xCp}',
//   version: 'v1',
//   version_date: '2017-05-26'
// });

var conversation = new Conversation({
  // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
   username: 'a7a1601f-1f2b-4b4d-b6e5-bd26147d62a6',
   password: 'ySuEpiGnMdZv',
   url: 'https://gateway.watsonplatform.net/conversation/api',
  version_date: Conversation.VERSION_DATE_2017_04_21
});

// Replace with the context obtained from the initial request
var context = {};

// conversation.message({
//   workspace_id: 'e9a29ef4-e05c-421a-8764-e6eafc74bd6d',
//   input: {'text': 'hello'},
//   context: context
// },  function(err, response) {
//   if (err)
//     console.log('error:', err);
//   else
//     console.log(JSON.stringify(response, null, 2));
// });
//
// conversation.getIntents({
//   workspace_id: 'e9a29ef4-e05c-421a-8764-e6eafc74bd6d'
// },  function(err, response) {
//   if (err)
//     console.log('error:', err);
//   else
//     console.log(JSON.stringify(response, null, 2));
// });

conversation.getExamples({
  workspace_id: '4297b60f-4f3d-44bc-bb46-0fad49a863ac',
  intent: 'Greeting'
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});

// conversation.createExample({
//   workspace_id: 'e9a29ef4-e05c-421a-8764-e6eafc74bd6d',
//   intent: 'Greeting',
//   text : 'What\'s up?'
// },  function(err, response) {
//   if (err)
//     console.log('error:', err);
//   else
//     console.log(JSON.stringify(response, null, 2));
// });
//
// for (var key in doc) {
//   if (doc.hasOwnProperty(key)) {
//     console.log(key + " -> " + doc[key]);
//   }
// }

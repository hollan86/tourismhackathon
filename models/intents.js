let mongoose = require('mongoose');
var assert = require('assert');
var Conversation1 = require('watson-developer-cloud/conversation/v1');
var conversation2 = new Conversation1({
  // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
  // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
   username: 'a7a1601f-1f2b-4b4d-b6e5-bd26147d62a6',
   password: 'ySuEpiGnMdZv',
   url: 'https://gateway.watsonplatform.net/conversation/api',
  version_date: Conversation1.VERSION_DATE_2017_04_21
});

let wDataSchemaIntents = mongoose.Schema({
  "type": "array",
  "items":{
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "examples": {
          "type": "array",
          "items":{
              "type": "string"
            }
        }
      }
    }
});

let intentsData = module.exports = mongoose.model('intentsDataModel',wDataSchemaIntents);

module.exports.insertIntents = function(db, callback) {
  db.collection('intents').insertMany(
    [
  {
    "name":"greetingtest",
    "examples":["Hi","Hello","What's up?"]
  },
    {
    "name":"abouttest",
    "examples":["Tell about your self?","who are you?","what do you offer?"]
  }
]
  ).then(function(r) {
    assert.equal(2, r.insertedCount);
    // Finish up test
    db.close();
  });
};

module.exports.findIntents = function(db, callback) {
   var cursor =db.collection('intents').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

module.exports.testIntents = function(db, callback) {
   var cursor =db.collection('intents').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        console.log(doc["name"]);
         //console.dir(doc);
      } else {
         callback();
      }
   });
};

module.exports.addIntentsWatson = function(db, callback) {
   var cursor =db.collection('intents').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        doc["examples"].forEach(function(current_value){
          //console.log(doc.name);
          conversation2.createExample({
            workspace_id: '4297b60f-4f3d-44bc-bb46-0fad49a863ac',
            intent: doc["name"],
            text : current_value
          },  function(err, response) {
            if (err)
              console.log('error:', err);
            else
              console.log(JSON.stringify(response, null, 2));
          });
        });
      } else {
         callback();
      }
   });
};

/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
const path = require('path');
const cors = require('cors');
var express = require('express'); // app server
var bodyParser = require('body-parser'); // parser for post requests
//var Conversation = require('watson-developer-cloud/conversation/v1'); // watson sdk
//the old
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://root:root@ds137054.mlab.com:37054/cr35test');
//
// mongoose.connection.once('open',() => {
//   console.log('connected to database')
// });
//
// mongoose.connection.on('error',(err) => {
//   console.log('Database error '+err)
// });
//the new
var assert = require('assert');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://root:root@ds113435.mlab.com:13435/tourismhackthon';


var app = express();

const datapoints = require('./routes/datapoints');

app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

//Bring in the models
let Intents = require('./models/intents');

//connect database and add data the new
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  Intents.insertIntents(db, function() {
      db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  //Intents.addIntentsWatson(db, function() {
      db.close();
  });
  //console.log(Intents.find());
//});

// Bootstrap application settings
app.use(express.static('./public')); // load UI from public folder
app.use(bodyParser.json());

// CONNECT TO PROVIDED API's
//Request promise library
//==============================================================
var rp = require('request-promise');
var options = {
    uri: 'https://api.list.co.uk/v1/events',
    headers: {
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGIxMjdkYTUtOGE4ZC00M2FiLWI5MjUtZDlmZDJkYTg0MWIwIiwia2V5X2lkIjoiYTJmNjgyM2EtYTdlNC00YTE0LWFiMmUtYWU4YWQ2OGRjODQ2IiwiaWF0IjoxNTA3Mjg4NDM2fQ.uEfdSeHIxl12IftrQCo6YTr4bQIrTqDG_DT4TYpseIg"
    },
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(function (repos) {
        //console.log(repos);
        //res_data = repos;
        repos.forEach(function(current_value) {
          var keys = Object.keys(current_value);
          for(var i=0;i<keys.length;i++){
            var key = keys[i];
            if (key == 'schedules'){
              console.log(current_value[key][0].place.lat);
            }
          }
        });
    })
    .catch(function (err) {
        //console.log(err);
    });

app.use('/datapoints', datapoints);

// Endpoint to be call from the client side
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.post('/datapoints/listapi', function(req, res) {
//   //var workspace = process.env.WORKSPACE_ID || '<workspace-id>';
//   //if (!workspace || workspace === '<workspace-id>') {
//   console.log(req.body.budget);
//   return res.json({
//     'output': {
//       'text': 'The app has not been configured with a <b>WORKSPACE_ID</b> environment variable. Please refer to the ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple">README</a> documentation on how to set this variable. <br>' + 'Once a workspace has been defined the intents may be imported from ' + '<a href="https://github.com/watson-developer-cloud/conversation-simple/blob/master/training/car_workspace.json">here</a> in order to get a working application.'
//     }
//   });
//   //}
//   // var payload = {
//   //   workspace_id: workspace,
//   //   context: req.body.context || {},
//   //   input: req.body.input || {}
//   // };
//
//   // Send the input to the conversation service
//   // conversation.message(payload, function(err, data) {
//   //   if (err) {
//   //     return res.status(err.code || 500).json(err);
//   //   }
//   //   return res.json(updateMessage(payload, data));
//   // });
// });

// /**
//  * Updates the response text using the intent confidence
//  * @param  {Object} input The request to the Conversation service
//  * @param  {Object} response The response from the Conversation service
//  * @return {Object}          The response with the updated message
//  */
// function updateMessage(input, response) {
//   var responseText = null;
//   if (!response.output) {
//     response.output = {};
//   } else {
//     return response;
//   }
//   if (response.intents && response.intents[0]) {
//     var intent = response.intents[0];
//     // Depending on the confidence of the response the app can return different messages.
//     // The confidence will vary depending on how well the system is trained. The service will always try to assign
//     // a class/intent to the input. If the confidence is low, then it suggests the service is unsure of the
//     // user's intent . In these cases it is usually best to return a disambiguation message
//     // ('I did not understand your intent, please rephrase your question', etc..)
//     if (intent.confidence >= 0.75) {
//       responseText = 'I understood your intent was ' + intent.intent;
//     } else if (intent.confidence >= 0.5) {
//       responseText = 'I think your intent was ' + intent.intent;
//     } else {
//       responseText = 'I did not understand your intent';
//     }
//   }
//   response.output.text = responseText;
//   return response;
// }

module.exports = app;

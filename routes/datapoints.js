const express = require('express');
const router = express.Router();

// Authenticate
router.post('/listapi', (req, res, next) => {
  //const username = req.body.budget;
  console.log('testing')
  console.log(req.body.budget);
  //const password = req.body.password;
  //return res.json({success: true, msg: 'Budget received'});

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
          return res.json(repos);
          // repos.forEach(function(current_value) {
          //   var keys = Object.keys(current_value);
          //   for(var i=0;i<keys.length;i++){
          //     var key = keys[i];
          //     if (key == 'schedules'){
          //       console.log(current_value[key]);
          //     }
          //   }
          // });
      })
      .catch(function (err) {
          //console.log(err);
      });

});

// Profile
// router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({user: req.user});
// });

module.exports = router;

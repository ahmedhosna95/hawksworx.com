'use strict';

var request = require("request");
// var oauth_token = process.env.NETLIFY_TOKEN;


export function handler(event, context, callback) {

  // get the action we'll perform" [ delete | approve ]
  // var action = event.queryStringParameters['action'];

  // get the id of the submission in question from the request
  // var id = event.queryStringParameters['id'];


  // var url = "https://api.netlify.com/api/v1/submissions/" +id + "?access_token=" + oauth_token;

  // parse the payload
  var body = event.body.split("payload=")[1];
  var payload = JSON.parse(unescape(body));
  var method = payload.actions[0].name
  var id = payload.actions[0].value

  console.log(method, id);

  // delete: delete this submission via the api

  // approve: post this comment to the approved comments form and let Netlify trigger a build to include it.


  callback(null, {
    statusCode: 200,
    body: method + ", " + id
  })


  // go get it
  // request(url, function(err, response, body){
  //   if(!err && response.statusCode === 200){
  //     console.log("...we got a result");
  //     callback(null, {
  //       statusCode: 200,
  //       body: body
  //     })
  //   }
  // });
}


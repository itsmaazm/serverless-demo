/*

AWS Lambda Function
Node.js 6.10
Create Role during Lambda creation that allow read from DynamoDB

*/

var AWS = require("aws-sdk");
var dc = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    
      var params = {
    TableName: "books",
    Key: {
      "bookid": parseInt(event.params.querystring.bookid)
    }
  };

  dc.get(params, function(err, data){
    callback(null, JSON.parse(JSON.stringify(data, null, 2)));
  });

};

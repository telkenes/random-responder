const response = require("../index.js")
response.get("hi", function(err, daresponse) {
  console.log(daresponse)
})
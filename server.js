var express = require("express");

var app = express()
 

 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  
  var re = /\(([^)]+)\)/;
  var infoArr = re.exec(req.headers["user-agent"]);
  var software = infoArr[1];
  var language = req.headers["accept-language"].split(',')[0]
  var ip = req.headers["x-forwarded-for"]
  //console.log(language)
  //var osArr = infoStr.split(re)
  //console.log(infoStr[1])
  //res.end(infoStr[1])
  res.end(JSON.stringify({"ip address":ip, "language": language, "software": software}))
})

app.listen(8080);
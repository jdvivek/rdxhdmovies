var express = require("express");
var request = require("request");
var http = require("http");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
var requestify = require('requestify'); 

var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get("/", function(req, res) {
    request({
            uri: req.query.url
        },
        function(error, response, body) {
            // console.log(body);
            // res.send(process.cwd());

            var d = body.replace('<script data-cfasync="false" type="text/javascript" src="//cryaptall.club/r7F0yM71eQjT4WZs/15574"></script>', '');

            d = d.replace('<script type="text/javascript" async="" src="https://www.gstatic.com/recaptcha/releases/eQmzkx3d5dtuXlLOA4pEID3I/recaptcha__en.js"></script>', '');



            res.status(200).send(d);
        }
    );
});

app.post("/", urlencodedParser, function (req, res) {
 
//NEED TO B HANDLE POST SO SUCH WEBSITE CAN WORK https://yifymovies.tv/
requestify.post("https://yifymovies.tv/", req.body).then(function(response) {
    console.log(response);
    //app.res.render('master',response);
     res.status(200).send(response);
     console.log("succes");
}).fail(function(err) {
    // add code here to handle error and/or debug reason for error
 console.log(err)
 console.log("error");

}).done();


});
app.get("/lion", function(req, res) {
    res.sendFile(process.cwd() + '/lion.html');
});
app.get("/proxyserver", function(req, res) {

        //res.status(200).send("hello");
    res.sendFile(process.cwd() + '/proxyserver.html');
});

app.get("/lion.js", function(req, res) {
    res.sendFile(process.cwd() + '/lion.js');
});
app.get("/proxyserver.js", function(req, res) {
    res.sendFile(process.cwd() + '/proxyserver.js');
});




var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
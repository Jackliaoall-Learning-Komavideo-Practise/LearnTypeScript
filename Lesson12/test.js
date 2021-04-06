"use strict";
exports.__esModule = true;
var request = require("request");
request('http://www.google.com', function (error, response, body) {
    if (error)
        console.error(error);
    else {
        console.log(body);
    }
});

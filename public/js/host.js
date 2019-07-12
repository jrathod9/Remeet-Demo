const express = require('express');
const path = require('path')
const port = 8000;
var app = express();
app.use(express.static(__dirname));

app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})



// var http = require('http'),
//     fs = require('fs');


// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err; 
//     }       
//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(8000);
// });
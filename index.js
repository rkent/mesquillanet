/**
 * node app to serve static files
 */
const static = require('node-static');

const port = process.argv[2] || process.env.PORT || 8091

//
// Create a node-static server instance to serve the './public_html' folder
//
var file = new static.Server('./public_html', {indexFile: "index.htm"});
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(port);
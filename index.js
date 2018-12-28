/**
 * node app to serve static files
 */

const finalhandler = require('finalhandler');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const http = require('http');

const port = process.argv[2] || process.env.PORT || 8091

// indexing of directories
const betas = serveIndex('/var/local/mesquillanet/public_html', {'icons': true});

//
// Create a node-static server instance to serve the 'public_html' folder
//
const serve = serveStatic('/var/local/mesquillanet/public_html');
 
const server = http.createServer(function (req, res) {
    const done = finalhandler(req, res);
    serve(req, res, function onNext(err) {
      if (err) return done(err);
      betas(req, res, done);
    });
});

server.listen(port);

var connect = require('connect');
var serveStatic = require('serve-static');
var port = 5000;

connect().use(serveStatic(__dirname)).listen(port);

console.log('Running Wumpus World on http://localhost:'+port);
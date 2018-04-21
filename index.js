let express = require('express');
let server = express();
let config = require('./config.json');

server.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
});
server.use('/api/v1', require('./routes/routes_api_v1'));
server.use('/api/v2', require('./routes/routes_api_v2'));

server.listen(config.webPort, function() {
    console.log('Server app is listening on port ' + config.webPort);
});
module.exports = server;
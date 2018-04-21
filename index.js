let express = require('express');
let app = express();
let config = require('./config.json');

app.listen(config.webPort, function() {
    console.log('Server app is listening on port 3000');
});
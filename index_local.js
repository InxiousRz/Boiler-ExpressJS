// =================================================================================================
// IMPORT
// =================================================================================================
var app = require('./index');
var http = require('http');
// var https = require('https'); //HTTPS




// =================================================================================================
// ENV
// =================================================================================================

// SET PORT
const PORT = process.env.NODE_PORT || 3000;
app.set('port', PORT);


// RUN APP
const SERVER = http.createServer(app);
SERVER.listen(PORT);
SERVER.on('error', onError);
SERVER.on('listening', onListening);

 
// BIND FUNCTION
function onError(error){
    console.log('Error');
    console.log(error.message)
}

function onListening(){
    console.log('Listening on PORT : ' + PORT);
    console.log('SERVER RUN : http://localhost:' + PORT);
}
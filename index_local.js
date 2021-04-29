// =================================================================================================
// IMPORT
// =================================================================================================
var app = require('./index');
var http = require('http');
// var https = require('https'); //HTTPS
 
 /**
  * Get port from environment and store in Express.
  */
 
// =================================================================================================
// ENV
// =================================================================================================
 const PORT = process.env.PORT || 3000;
 app.set('port', port);
 
 var server = http.createServer(app);
 server.listen(port);
 server.on('error', onError);
 server.on('listening', onListening);


 function normalizePort(val) {
     var port = parseInt(val, 10);
 
     if (isNaN(port)) {
         // named pipe
         return val;
     }
 
     if (port >= 0) {
         // port number
         return port;
     }
 
     return false;
 }
 
 /**
  * Event listener for HTTP server "error" event.
  */
 
 function onError(error) {
     console.log('Error');
     try {
         console.log(error.message)
     
     } catch(err){
         console.log('Error 2 :'+err);
     }
 }
 
 /**
  * Event listener for HTTP server "listening" event.
  */
 
 function onListening() {
     var addr = server.address();
     var bind = typeof addr === 'string'
         ? 'pipe ' + addr
         : 'port ' + addr.port;
     debug(addr + ' > Listening on > ' + bind);
 }
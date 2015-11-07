var debug = require('debug')('Air-Hockey');
var app = require('../app');
var socket_io = require("socket.io");
//var numbe

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
var io = socket_io(server);

io.on('connection', function (socket) {
  console.log(Object.keys(io.sockets.connected));
  if(Object.keys(io.sockets.connected).length == 2){
  console.log('game started on server');
    io.sockets.emit("start");
  }
});
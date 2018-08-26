var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('player joined');
  // REFWD MESSAGE PAYLOAD
  socket.on('sendMeSomething', function(msg){
    console.log('Received ' + msg + ' from client, refowarding ...');
    io.emit('serverTalking', msg);
  });
  // DISCONNECT
  socket.on('disconnect', function(){
    console.log('player left');
  });
});

http.listen(port, function(){
  console.log('listening on : ' + port);
});

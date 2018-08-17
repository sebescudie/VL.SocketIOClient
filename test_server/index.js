var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('player joined');
  // REFWD CHAT MESSAGE PAYLOAD
  socket.on('loopback', function(msg){
    console.log('Received ' + msg + ' from loopback event, refowarding ...');
    io.emit('loopback', msg);
  });
  // DISCONNECT
  socket.on('disconnect', function(){
    console.log('player left');
  });
  // TEST MESSAGE
  socket.on('talkToMe', function(msg){
    console.log('Server received talkToMe event, emitting serverTalking now ...');
    io.emit('serverTalking', 'Server talking !');
  });
});

http.listen(port, function(){
  console.log('listening on : ' + port);
});

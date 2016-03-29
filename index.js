var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var connected_user = 1;
var userId = 0;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  connected_user++;
  userId++;
  io.emit('chat message', 'user' + userId + ' joined the chat room!');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('untyped', function(status){
    io.emit('type alert', status);
  });
  socket.on('disconnect', function(){
	connected_user--;
	console.log('connected users:' + connected_user);
  });
});


http.listen(3000, function() {
	console.log('listening on *: 3000');
});


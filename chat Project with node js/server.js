const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  }
}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {



  socket.on('newuser', (username) => {

    socket.broadcast.emit("update", username + " " + " Join the chat")
    // console.log(`A user connected`);

  });

  socket.on('exituser', (username) => {
    socket.broadcast.emit("update", username + " " + "left the conversation")
    // console.log(`A user exit`);

  });
  socket.on('chat', (message) => {
    socket.broadcast.emit("chat",message)
    // console.log(message);

  });




 socket.on('edit-message', (data) => {
   const messageId = data.id;
  const newText = data.text;

   const messageToUpdate = messages.find(message => message.id === messageId);
  if (messageToUpdate) {
    messageToUpdate.text = newText;
     io.emit('message-updated', messageToUpdate);
  }
});

 socket.on('delete-message', (id) => {
   
  const messageId = id;
  const messageIndex = messages.findIndex(message => message.id === messageId);
  if (messageIndex !== -1) {
     const deletedMessage = messages.splice(messageIndex, 1)[0];
     io.emit('message-deleted', deletedMessage.id);
  }
});



});

server.listen(4000, () => {
  console.log('Server listening on port 4000');
});




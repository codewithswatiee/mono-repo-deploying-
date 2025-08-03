import { WebSocketServer } from 'ws';
import { client } from "@repo/db/client";

const server = new WebSocketServer({ port: 3001 });

server.on('connection', async (socket) => {
  console.log('New client connected');
  const user = await client.user.create({
    data:{
        username: Math.random().toString(36).substring(7),
        password: Math.random().toString(36).substring(7)
    }
  })
  socket.send(`User created with ID: ${user.username} for this connection`);

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected');
  });
});

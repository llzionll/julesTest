import { Server } from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport';
import http from 'http';
import express from 'express';
import { MyRoom } from './MyRoom'; // Ensure this path is correct

const port = Number(process.env.PORT) || 2567;
const app = express();

app.use(express.json());

const server = http.createServer(app);
const gameServer = new Server({
  transport: new WebSocketTransport({
    server // provide the custom server for `WebSocketTransport`
  })
});

// Register your room handlers
gameServer.define('my_room', MyRoom);

// Example: Health check route
app.get('/health', (req, res) => {
  res.send('Server is healthy');
});

gameServer.listen(port);
console.log(`Listening on ws://localhost:${port}`);

import express from 'express';
import { createServer } from 'note:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
    res.send('<p>Hello World</p>');
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});

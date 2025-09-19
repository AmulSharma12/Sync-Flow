import http from 'http';
import app from './app.js';
import {connectDB,config} from './config/index.js';

const server = http.createServer(app);

server.listen(config.port,() => {
    connectDB();
    console.log(`Server is running at PORT: ${config.port}`)
});
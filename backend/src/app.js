import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {createServer} from 'node:http';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from "socket.io";
import { connectToSocket } from './controllers/socketManager.js';
import userRoute from './routes/userRoute.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);
const uri = process.env.MONGO_URL;
app.set("port", process.env.PORT || 3000);
app.use(cors());
app.use(express.json({limit: '40kb'}));
app.use(express.urlencoded({limit: '40kb', extended: true}));

app.use('/api/v1/users', userRoute);

const start = async() => {
    const connectionDB = await mongoose.connect(uri);
    server.listen(app.get("port"), ()=>{
        console.log(`App is listening on port ${app.get("port")}`);
    });
};

start();

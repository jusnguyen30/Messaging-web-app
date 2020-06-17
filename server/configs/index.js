import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;

const express = require('express');
const socketio = require('socket.io');
const http = require('http'); 

const app = express();
const server = http.createServer(app);
const io = socketio(server);



/* server.listen(PORT, () => {
    console.log(`Server has started on Port ${PORT}`);
});

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        io.emit('User disconnected');
    });
}); */

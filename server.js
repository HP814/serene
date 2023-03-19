import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import { dirname } from "path";
import onSocket from "./socket.js";


// const express = require("express");
const path = require("path");

const app = express();
const server = createServer(app);

const io = (server);

app.use(express.static(path.join(__dirname+"/public")));


io.on("connection", function(socket){
	socket.on("newuser",function(username){
		socket.broadcast.emit("update", username + " joined the conversation");
	});
	socket.on("exituser",function(username){
		socket.broadcast.emit("update", username + " left the conversation");
	});
	socket.on("chat",function(message){
		socket.broadcast.emit("chat", message);
	});
});

server.listen(5000);

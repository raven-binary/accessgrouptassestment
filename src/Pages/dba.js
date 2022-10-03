const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "20.6.2.254");
const cors = require("cors");

let reply;

App.get("", async (req, res) => {
    reply = await redis.hgetall("Dan");
    res.send(await reply)
});

App.get("/Kim", async (req, res) => {
    reply = await redis.hgetall("Kim");
    res.send(await reply)
});

App.get("/Beth", async (req, res) => {
    reply = await redis.hgetall("Beth");
    res.send(await reply)
});

App.listen(5000, () => {
    console.log(`Server Listening at http://localhost:5000/`)
  });
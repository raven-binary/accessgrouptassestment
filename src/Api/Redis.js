const express = require("express");
const App = express();
const Redis = require("ioredis");
const redis = new Redis(6379, "20.247.164.202");
const cors = require("cors");

let reply;
App.use(cors());


// This excerpt is to retrieve all QuickLink entries under User
// How this works = The username is hashed with his/her entire entries of Quick Links
// redis.hgetall will then retrieved all hashed values under Dan
App.get("/list", async (req, res) => {
    let user = req.body.user
    reply = await redis.hgetall(`${user}`);
    res.send(reply)
});

// This excerpt is to create a QuickLink entry under the User
// How this works = Relevant data such as (user, title, link, desc) is retrived from the Request(Req)
// redis.hset would then hash all entries under User
App.post("/create", async (req, res) => {
  let user = req.body.user;
  let title = req.body.title;
  let link = req.body.link;
  let desc = req.body.desc;

  if (title != null && link != null && desc != null)
  {
    await redis.hset (`${user}`, "title", `${title}`, "link", `${link}`, "desc", `${desc}`);
    reply = await redis.hgetall(`${user}`);
  }

  else
  {
    reply = "Please complete required field to create entry!"
  }

  res.send(reply);
});

// This excerpt is to edit a QuickLink entry under the User
// How this works = Relevant data such as (user, title, link, desc) is retrived from the Request(Req)
// redis.scan searches for matching entry in the storage, and return values
// If returned values are not null, redis.hset would then hash all new entries under User
App.post("/edit", async (req, res) => {
  let user = req.body.user;
  let title = req.body.title;
  let link = req.body.link;
  let desc = req.body.desc;

  let newtitle = req.body.title;
  let newlink = req.body.link;
  let newdesc = req.body.desc;

  titleProcess = await redis.scan("0", "MATCH", `*${title}*`, "COUNT", "200000");
  linkProcess = await redis.scan("0", "MATCH", `*${link}*`, "COUNT", "200000");
  descProcess = await redis.scan("0", "MATCH", `*${desc}*`, "COUNT", "200000");

  if (titleProcess != null)
  {
    await redis.hset (`${user}`,`${title}`,`${newtitle}`);
  }

  else if (linkProcess != null)
  {
    await redis.hset (`${user}`,`${link}`,`${newlink}`);
  }

  else if (descProcess != null)
  {
    await redis.hset (`${user}`,`${desc}`,`${newdesc}`);
  }

  reply = await redis.hgetall(`${user}`);
  res.send(reply);
});

// This excerpt is to delete a QuickLink entry under the User
// How this works = Relevant data such as (user, title, link, desc) is retrived from the Request(Req)
// redis.scan searches for matching entry in the storage, and return values
// If returned values are not null, redis.hset would then delete all selected entries under User
App.post("/delete", async (req, res) => {
  let user = req.body.user;
  let title = req.body.title;
  let link = req.body.link;
  let desc = req.body.desc;

  titleProcess = await redis.scan("0", "MATCH", `*${title}*`, "COUNT", "200000");
  linkProcess = await redis.scan("0", "MATCH", `*${link}*`, "COUNT", "200000");
  descProcess = await redis.scan("0", "MATCH", `*${desc}*`, "COUNT", "200000");

  if (titleProcess != null)
  {
    await redis.hdel (`${user}`,`${title}`);
  }

  else if (linkProcess != null)
  {
    await redis.hdel (`${user}`,`${link}`);
  }

  else if (descProcess != null)
  {
    await redis.hdel (`${user}`,`${desc}`);
  }

  reply = await redis.hgetall(`${user}`);
  res.send(reply);
});

App.listen(5000, () => {
    console.log(`Retriever server Listening at http://localhost:5000/`)
  });
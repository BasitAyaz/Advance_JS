// const http = require("http");

let arr = [
  {
    id: 1,
    title: "abc",
  },
  {
    id: 2,
    title: "xyz",
  },
  {
    id: 3,
    title: "123",
  },
];

let port = process.env.port || 5000;

// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       if (req.method == "GET") {
//         res.write("Welcome to Node JS");
//         res.end();
//       }
//     }
//     if (req.url === "/users") {
//       res.write(JSON.stringify(arr));
//       res.end();
//     }
//   })
//   .listen(port);

const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express");
});

app.get("/users", (req, res) => {
  res.json(arr);
});

app.get("/users/:uid", (req, res) => {
  let id = req.params.uid;
  let result = arr.find((x) => x.id == id);
  if (result) {
    res.json(result);
  } else {
    res.status(404).send("Data Not Found");
  }
});

app.get("/q", (req, res) => {
  res.json(req.query);
});

app.post("/users", (req, res) => {
  if (!req.body.title || req.body.title.length < 3) {
    res
      .send("Title is Required and must be more than 3 characters")
      .status(400);
  } else {
    req.body.id = arr.length + 1;
    arr.push(req.body);
    res.json(req.body);
  }
});

app.put("/users/:id", (req, res) => {
  let id = req.params.id;

  // checking data in database

  let obj = arr.find((x) => x.id == id);
  if (!obj) {
    res.status(404).send("Data Not Found");
    return;
  }

  // validate body

  if (!req.body.title || req.body.title.length < 3) {
    res
      .send("Title is Required and must be more than 3 characters")
      .status(400);
    return;
  }

  obj.title = req.body.title;
  res.json(obj).status(200);
});

app.delete("/users/:id", (req, res) => {
  let obj = arr.find((x) => x.id == req.params.id);
  if (!obj) {
    res.status(404).send("Data Not Found");
    return;
  }
  arr.splice(arr.indexOf(obj), 1);
  res.send("deleted Successfully").status(200);
});

app.listen(port);

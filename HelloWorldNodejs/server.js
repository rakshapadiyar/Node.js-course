const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello welcome to my hotel");
});

app.get("/chicken", (req, res) => {
  res.send("Pak pak paka pak pak");
});

app.get("/idli", (req, res) => {
    res.send("Good choice");
  });

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
});

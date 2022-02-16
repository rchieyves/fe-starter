const fs = require("fs");
const express = require("express");
const server = express();
const port = 3000;

server.use(express.static("public"));

server.use("/api/dashboard", function (req, res) {
  const dashboardData = JSON.parse(fs.readFileSync("data.json"));
  res.send(dashboardData).status(200).end();
});

server.listen(port, function () {
  console.log(`Server is now listening on port ${port}`);
});

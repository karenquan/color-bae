const express = require("express");
const app = express();
const path = require("path");
// const fetch = require("node-fetch");
const port = process.env.PORT || 5000;

// Console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// test
app.get("/api/test", (req, res) => {
  res.send({ data: "herro" });
});

// Deployment
// https://blog.bitsrc.io/react-production-deployment-part-3-heroku-316319744885
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static("client/build"));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

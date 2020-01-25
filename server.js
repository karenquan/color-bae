const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const port = process.env.PORT || 5000;

const COLOURLOVER_API_URL = "http://www.colourlovers.com/api";

// Console.log that server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// GET top palettes
app.get("/api/getTopPalettes", (req, res) => {
  let url = `${COLOURLOVER_API_URL}/palettes/top?format=json`;
  //   console.log("URL", url);
  fetch(url, { method: "GET", jsonp: "jsonCallback", dataType: "jsonp" })
    .then(response => {
      console.log("RESPONSE", response);
      response.json();
    })
    .then(data => {
      console.log("DATA", data);
      res.send({ data: data });
    })
    .catch(err => {
      res.send(err);
    });
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

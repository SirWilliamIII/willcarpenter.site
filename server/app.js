var express = require("express");
var path = require("path");
var app = express();

const PORT = process.env.PORT || 3000
// Example usage of __dirname
app.use(
  express.static(
    path.join("/Users/sirwilliam/Programming/vanilla-resume", "public")
  )
);

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server is running on port ${ PORT }`);
});

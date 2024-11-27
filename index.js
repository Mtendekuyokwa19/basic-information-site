const fs = require("fs");
const express = require("express");
const app = express();
function checkfileexist(filepath) {
  if (filepath.pathname === "/") {
    return "./index.html";
  } else if (fs.existsSync("." + filepath.pathname)) {
    return "." + filepath.pathname;
  }
  return "./404.html";
}

app.get("/", (req, res) => res.sendFile("./index.html", { root: __dirname }));

app.get("/about", (req, res) =>
  res.sendFile("./about.html", { root: __dirname }),
);
app.get("/contact", (req, res) =>
  res.sendFile("./contact.html", { root: __dirname }),
);
app.get("/index", (req, res) =>
  res.sendFile("./index.html", { root: __dirname }),
);
app.get("*", (req, res) => res.sendFile("./404.html", { root: __dirname }));

app.listen(3000);

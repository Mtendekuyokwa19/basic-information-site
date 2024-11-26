const fs = require("fs");
const http = require("node:http");
let url = new URL("https://localhost");
let port = 9081;

function checkfileexist(filepath) {
  if (filepath.pathname === "/") {
    return "./index.html";
  } else if (fs.existsSync("." + filepath.pathname)) {
    return "." + filepath.pathname;
  }
  return "./404.html";
}

const server = http.createServer((req, res) => {
  fs.readFile(
    checkfileexist(new URL(req.url.toString(), url + port)),
    "utf8",
    (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });

        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data.toString());
      console.log(data);

      return res.end();
    },
  );
});
server.listen(port);

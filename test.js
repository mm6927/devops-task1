const assert = require("node:assert");
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! My first DevOps internship app is running.");
});

server.listen(0, "127.0.0.1", () => {
  const port = server.address().port;

  http.get(`http://127.0.0.1:${port}`, (res) => {
    let body = "";

    res.on("data", (chunk) => {
      body += chunk;
    });

    res.on("end", () => {
      try {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(
          body,
          "Hello! My first DevOps internship app is running."
        );

        console.log("Test passed!");
      } catch (error) {
        console.error("Test failed:", error.message);
        process.exitCode = 1;
      } finally {
        server.close();
      }
    });
  }).on("error", (error) => {
    console.error("Test failed:", error.message);
    process.exitCode = 1;
    server.close();
  });
});
const http = require("http");
const fs = require("fs");

const PORT = 3000;

// create server
const server = http.createServer((req, res) => {

    // serve css file
    if (req.url === "/css/style.css") {
        fs.readFile("./public/css/style.css", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
        return;
    }

    // home page
    if (req.url === "/" || req.url === "/home") {
        fs.readFile("./pages/home.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        return;
    }

    // about page
    if (req.url === "/about") {
        fs.readFile("./pages/about.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        return;
    }

    // contact page
    if (req.url === "/contact") {
        fs.readFile("./pages/contact.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Error");
                return;
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        return;
    }

    // 404 page for other routes
    fs.readFile("./pages/404.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("404 Not Found");
            return;
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
    });

});

// start server
server.listen(PORT, () => {
    console.log("Server running on port 3000");
});
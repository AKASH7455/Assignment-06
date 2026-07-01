const http = require("http");
const fileHandler = require("./utils/fileHandler");

const PORT = 3000;

const server = http.createServer((request, response) => {

    // serve CSS
    if (request.url === "/css/style.css") {
        fileHandler("./public/css/style.css", "text/css", 200, response);
        return;
    }

    // root should open home page
    if (request.url === "/" || request.url === "/home") {
        fileHandler("./pages/home.html", "text/html", 200, response);
        return;
    }

    if (request.url === "/about") {
        fileHandler("./pages/about.html", "text/html", 200, response);
        return;
    }

    if (request.url === "/contact") {
        fileHandler("./pages/contact.html", "text/html", 200, response);
        return;
    }

    if (request.url === "/services") {
        fileHandler("./pages/services.html", "text/html", 200, response);
        return;
    }

    // fallback 404
    fileHandler("./pages/404.html", "text/html", 404, response);

});

server.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});
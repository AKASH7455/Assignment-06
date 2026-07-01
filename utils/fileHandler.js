const fs = require("fs");

const fileHandler = (filePath, contentType, statusCode, response) => {

    fs.readFile(filePath, (error, data) => {

        if (error) {

            response.writeHead(500, {
                "Content-Type": "text/plain"
            });

            response.end("Internal Server Error");

            return;

        }

        response.writeHead(statusCode, {
            "Content-Type": contentType
        });

        response.end(data);

    });

};

module.exports = fileHandler;
const http = require("http");
const PORT = process.env.PORT || 4000;
require("url")

const contacts = require("./data");

const get = require("./get");
const post = require("./post");
const put = require("./put");
const deleteR = require("./delete");
const getBody = require("./getBody")

const server = http.createServer((request, response) => {

    request.contacts = contacts

    request.query = new URL(request.url, `http://${request.headers.host}`)

    switch (request.method) {
        case "GET":
            getBody(request, response, get);
            break;

        case "POST":
            getBody(request, response, post);
            break;

        case "PUT":
            getBody(request, response, put);
            break;

        case "DELETE":
            getBody(request, response, deleteR);
            break;

        default:
            response.statusCode = 400;
            response.write("No Response");
            response.end();
    }
});

server.listen(PORT, (err) => {
    err ? console.error(err) : console.log(`listening on port ${PORT}`);
});
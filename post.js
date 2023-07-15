module.exports = (request, response) => {
    switch (request.url) {
        case "/contacts":
            request.contacts.push(request.body);
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.write(JSON.stringify(request.contacts));
            response.end();
            break;

        default:
            response.statusCode = 400;
            response.write(`CANNOT POST ${request.url}`);
            response.end();
    }
};
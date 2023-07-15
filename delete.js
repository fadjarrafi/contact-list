module.exports = (request, response) => {
    const url = request.url.split("?")[0];

    switch (url) {
        case "/contacts":
            const id = request.query.searchParams.get("id");
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            request.contacts.splice(id, 1);
            response.write(JSON.stringify(request.contacts));
            response.end();
            break;

        default:
            response.statusCode = 400;
            response.write(`CANNOT DELETE ${request.url}`);
            response.end();
            break;
    }
};
module.exports = (request, response) => {

    const url = request.url.split("?")[0]

    switch (url) {

        case "/contacts":
            const id = request.query.searchParams.get("id")
            response.statusCode = 200
            response.setHeader("Content-Type", "application/json")
            request.contacts[id] = request.body
            response.write(JSON.stringify(request.contacts[id]))
            response.end()
            break

        // response for unexpected get requests
        default:
            response.statusCode = 400
            response.write(`CANNOT PUT ${request.url}`)
            response.end()
            break

    }
}
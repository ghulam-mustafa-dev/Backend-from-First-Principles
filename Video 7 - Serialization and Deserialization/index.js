const http = require('http');

const port = 5000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.statusCode = 200;
        res.end(JSON.stringify(
            {
                id: 1,
                name: "John"
            }
        ))
    }
    else if(req.url === '/api/users' && req.method === 'POST'){
        let body = '';
        req.on('data',  chunk => {
            body = body + chunk
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            console.log('Data', data);
        })
        res.end("Done")
    }
    else{
        res.end("Route not found");
    }
})

server.listen(port, () => {
    console.log(`Server running on ${hostname}:${port}`);
})


// JSON.stringify -> converts JS object to JSON
// JSON.parse -> converts JSON to JS object

// req.on -> is used to listen to events and call a callback function when that event occurs
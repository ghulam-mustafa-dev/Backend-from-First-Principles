const http = require('http');

const hostname = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.end("Hi Server");
    }
    else if(req.url === '/hi'){
        res.end("Hi");
    }
    else if(req.url === '/about'){
        res.end('Hi about');
    }
    else{
        res.statusCode = 404;
        res.end('Not found');
    }
});


server.listen(port, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
});


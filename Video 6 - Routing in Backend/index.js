const http = require('http');;

const hostname = '127.0.0.1';
const port = 5000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    // --- STATIC ---
    console.log(req.method);
    if(req.url === '/about' && req.method === 'GET'){
        res.end('About Page')
    }
    else if(req.url === '/login'){
        res.end('Login Success');
    }
    else{
        res.end('Route not found');
    }

    // --- DYNAMIC ---
   if(req.url.startsWith('/users')){
    const id = req.url.split('/')[2];
    res.end(`user id: ${id}`);
   }

    // --- Query ---
    console.log('>', params.get('query'));
    console.log('>', params.get('limit'));
});

server.listen(port, () => {
     console.log(`Server running on http://${hostname}:${port}/`);
})
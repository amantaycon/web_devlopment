const http = require('http');
const PORT = 3000;

const route = (req, res) => {
    if(req.url === '/home') res.end("i am home page")
    else res.end("i am not listed")
}


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    route(req, res);
});


server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

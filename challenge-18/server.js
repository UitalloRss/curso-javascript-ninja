const http = require('http');
const fs = require('fs').promises;
const host = 'localhost';
const port = 9001;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "/index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`servidor ligado em http://${host}:${port}`);
    console.log('Para derrubar o servidor, aperte ctrl + c');
});


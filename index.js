const http = require('http');
const fs = require('fs');

// helper function to read and display files
function displayPage(res, path){

    var readStream = fs.createReadStream(path);
    readStream.pipe(res);
}

http.createServer((req,res)=> {

    const url = req.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if (url === '/')
        displayPage(res,'./index.html');
    if (url === '/about')
        displayPage(res, './about.html');
    if (url === '/contact')
        displayPage(res, './contact.html');

}).listen(3000);

console.log("server running on port 3000");
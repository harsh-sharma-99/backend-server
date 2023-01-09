//server creation

const http = require('http');
const fs   = require('fs');

const server = http.createServer((req, res) => {
    console.log("request has been made from browser to server");
    // console.log("=========", req, req.method, req.url);

    res.setHeader('Content-Type', 'text/html');
    res.write('<h1> Hi we did it! </h1>');
    res.write('<h3> Lets Rock </h3>');

    fs.readFile('./views/index.html', (err, file) => {
        if(err){
            console.log("====error===", err);
        }else{
            res.write(file);
            res.end();
        }
    })

  
})

//port number, host, callback
server.listen(3000,'localhost',() => {
    console.log("server listening on port 3000");
})
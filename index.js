const http = require('http');
const url = require('url');

const app = http.createServer((request,response) => {
    var querystring
    querystring = url.parse(request.url,true).query;
    if (querystring) {
        response.writeHead(200, {"Content-Type": "text/html"});
        console.log('the index.js has loaded')
        response.write(`<h1>The parsed value from the url is ${querystring.value}</h1>`);
        response.end();
    }
    
    else {
        response.write(`<h1>No values were passed</h1>`);
        response.end();
    }

})

app.listen(3000);
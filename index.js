const http = require('http');
const url = require('url');
const newModule = require('./module.js');

const app = http.createServer((request,response) => {
    var querystring,zip;
    querystring = url.parse(request.url,true).query;
    zip = querystring.value
    if (zip) {
        response.writeHead(200, {"Content-Type": "text/html"});
        console.log('the index.js has loaded')
        response.write(`<h1>${querystring.value} is the zip code for ${newModule.findcityname(zip)} <br> </h1>`);
        response.end();
    }
    
    else {
        response.write(`<h1>No values were passed check your terminal/command prompt for log message.</h1>`);
        newModule.addlog();
        response.end();
    }

})

app.listen(3000);
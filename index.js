const http = require('http');

const app = http.createServer((request,response) => {
  console.log('server is running...')
})

app.listen(3000);
let app = require('express'),
http = require('http').createServer(app);

const PORT = 8080;

http.listen(PORT () => {
  console.log(`listening on *:${PORT}`)
})
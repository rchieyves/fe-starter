const express = require ("express");
const server = express();
const PORT = 3000;

server.use(express.static("publick"));
server.listen(PORT, function*(){
    console.log('Server is now listening to port ${PORT}');

})
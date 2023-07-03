const server = require('./src/server');

server.listen(8004,() => {
    console.log('Database is listening on port 8004');
})
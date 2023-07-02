const server = require("./src/server");
const PORT = 8002;

server.listen(PORT, () => {
  console.log(`Server FILMS is listening on port ${PORT}`);
});

const server = require("./src/server");
const PORT = 8001;

server.listen(PORT, () => {
  console.log(`Server CHARACTERS is listening on port ${PORT}`);
});

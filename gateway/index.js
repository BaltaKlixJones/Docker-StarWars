const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware, fixRequestBody } = require("http-proxy-middleware");
const cors = require('cors')
const app = express();
app.use(morgan("dev"));

app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:5173',
}
app.use(cors(corsOptions))

app.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
    onProxyReq: fixRequestBody
  })
);

app.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
    onProxyReq: fixRequestBody
  })
);

app.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
    onProxyReq: fixRequestBody
  })
);



app.listen(8000, () => {
  console.log("Gateway running on port 8000");
});

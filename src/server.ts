
import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from "./services";

const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);

const port = 8080 || process.env.PORT;

const server = http.createServer(router);

server.listen(port, () => {

  console.log(`server started at http://localhost:${port}`);
});

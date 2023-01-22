import * as express from "express";
import catRouter from "./cats/cats.routes";

const app: express.Express = express();
const port: number = 8000;

// logging middleward
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is a middleware for logging");
  next();
});

// middleware for requestBody
app.use(express.json());

app.use(catRouter);

// not found middleward
app.use((req, res, next) => {
  console.log("404 not found");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});

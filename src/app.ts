import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

const port: number = 8000;

app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is a middleware for logging");
  next();
});

app.get("/cat/som", (req, res, next) => {
  console.log("this is a middleware only for /cat/som routes");
  next();
});

app.get("/cat/som", (req: express.Request, res: express.Response) => {
  // console.log(req.rawHeaders[1]);
  res.send({ cats: Cat, blue: Cat[1] });
});

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req.rawHeaders[1]);
  res.send({ cats: Cat });
});

app.get("/cat/blue", (req: express.Request, res: express.Response) => {
  // console.log(req.rawHeaders[1]);
  res.send({ cats: Cat, blue: Cat[0] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});

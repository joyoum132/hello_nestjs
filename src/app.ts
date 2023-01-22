import * as express from "express";

const app: express.Express = express();

const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  console.log({ req });

  res.send({ name: "yoo joyoung", age: 99, family: ["wan", "ok", "hyuk"] });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});

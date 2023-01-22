import * as express from "express";
import { Cat, CatType } from "./app.model";

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

// 고양이 전체 데이터 조회
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connection error");
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: "" });
  }
});

// 특정 고양이 데이터 조회
app.get("/cat/:id", (req, res) => {
  try {
    const params = req.params;
    console.log({ params });
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });

    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: "" });
  }
});

// 고양이 추가
app.post("/cat", (req, res) => {
  try {
    const body = req.body;
    console.log({ body });

    Cat.push(body);
    res.status(200).send({
      success: true,
      data: Cat,
    });
  } catch (error) {
    res.status(500).send({ success: false, error: "" });
  }
});

//express 에서는 RequestBody 를 읽기 위한 middleware 추가

// not found middleward
app.use((req, res, next) => {
  console.log("404 not found");
  next();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/`);
});

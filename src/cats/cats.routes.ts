import {
  createCat,
  deleteCat,
  readAllcat,
  readCat,
  updateCat,
  updatePartialCat,
} from "./cats.service";

import { Router } from "express";
const router = Router();

router.get("/cats", readAllcat);
router.get("/cat/:id", readCat);
router.post("/cat", createCat);
router.put("/cats/:id", updateCat);
router.patch("/cats/:id", updatePartialCat);
router.delete("/cats/:id", deleteCat);

export default router;

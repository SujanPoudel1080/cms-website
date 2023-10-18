import express from "express";
import "dotenv/config";
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";
import db from "./utils/db.js";
import { body, validationResult } from "express-validator";

interface Job {
  id: string;
  company: string;
  position: string;
}

const app = express();
app.use(express.json());
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;
const port = process.env.PORT || 8000;
db();

app.use("/api/v1/jobs", jobRouter);

app.post(
  "/api/v1/test",
  [
    body("name")
      .notEmpty()
      .withMessage("name is a required field")
      .isLength({ min: 10, max: 40 })
      .withMessage(
        "the name should be at least 10 characters long and at most 40 characters long"
      ),
  ],
  (req: express.Request, res: express.Response, next: any) => {
    const errors = validationResult(req);
    const errorMessages = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorMessages });
    next();
  },
  (req: express.Request, res: express.Response) => {
    const { name } = req.body;
    res.json({ message: `hello ${name}`, data: req.body });
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello!");
});

app.post("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Data received", status: 200, data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

let jobs: Array<Job> = [
  {
    id: "1",
    company: "Apple",
    position: "frontend",
  },
  {
    id: "2",
    company: "Google",
    position: "backend",
  },
];

app.get("/api/v1/jobs");

app.post("/api/v1/jobs");

app.get("/api/v1/jobs/:id");

app.patch("/api/v1/jobs/:id");

app.delete("api/v1/jobs/:id");

app.use("*", (req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err: any, req: express.Request, res: express.Response, next: any) => {
  console.log(err);
  res.status(500).json({ message: "something went wrong" });
});

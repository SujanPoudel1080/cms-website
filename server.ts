import express from "express";
import "dotenv/config";
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";

interface Job {
  id: string;
  company: string;
  position: string;
}

const app = express();
app.use(express.json());
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;
const port = process.env.PORT || 8000;

app.use('/api/v1/jobs', jobRouter);
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

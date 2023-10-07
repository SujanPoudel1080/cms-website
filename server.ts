import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { isJsxAttribute } from "typescript";

// const getData = async () => {
//   try {
//     const response = await fetch(
//       "https://www.course-api.com/react-useReducer-cart-project"
//     );
//     const res = await response.json();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
// getData();

interface Job {
  id: string;
  company: string;
  position: string;
}

const app = express();
app.use(express.json());
process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;
const port = process.env.PORT || 8000;

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

app.get("/api/v1/jobs", (req: express.Request, res: express.Response) => {
  res.status(200).json({ jobs: jobs });
});

app.post("/api/v1/jobs", (req: express.Request, res: express.Response) => {
  const { id, company, position } = req.body;
  if (!id || !company || !position) {
    return res
      .status(400)
      .json({ message: "Please provide company and position" });
  }
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

app.get("/api/v1/jobs/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with id ${id} exists` });
  }
  res.status(200).json({ message: "Success", data: job });
});

app.patch("/api/v1/jobs/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const { company, position } = req.body;
  if (!company && !position) {
    return res
      .status(404)
      .json({ message: "please provide company name and position" });
  }
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ message: `No job with id ${id} exists` });
  }
  job.company = company;
  job.position = position;

  res.status(200).json({ message: "job successfully edited", data: jobs });
});

app.delete("api/v1/jobs/:id", (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res
      .status(404)
      .json({ message: `job with id ${id} does not exist` });
  }
  const newJob = jobs.filter((job) => job.id !== id);
  jobs = newJob;
  res.status(200).json({ message: "job deleted successfully", jobs });
});

app.use("*", (req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err: any, req: express.Request, res: express.Response, next: any) => {
  console.log(err);
  res.status(500).json({ message: "something went wrong" });
});

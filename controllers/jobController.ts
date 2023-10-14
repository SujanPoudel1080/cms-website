import express from "express";
var jobs = [
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

export const getAllJobs = async (
  req: express.Request,
  res: express.Response
) => {
  await res.status(200).json({ message: "Got jobs successfully", jobs });
};

export const createJob = async (
  req: express.Request,
  res: express.Response
) => {
  const { id, company, position } = req.body;
  if (!id || !company || !position) {
    res.status(400).json({ message: "please enter all the necessary details" });
    return;
  }
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getJob = (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id == id);
  if (!job) {
    res.status(400).json({ message: `the job with id ${id} doesnot exist` });
  }
  res.status(200).json({ message: "job found sucessfully", job });
};

export const updateJob = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const { company, position } = req.body;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res.status(400).json({ message: `job with id ${id} doesnot exist` });
    return;
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ message: "job modified successfully", jobs });
};

export const deleteJob = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    res
      .status(400)
      .json({ message: `job with id ${id} doesnot exist. Cannot delete.` });
    return;
  }
  jobs = jobs.filter((job) => job.id !== id);
  res.status(200).json({ message: "Job deleted successfully", jobs });
};

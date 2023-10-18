import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import express from "express";
import Job from "../models/jobModel.js";
import { NotFoundError } from "../utils/customErrors.js";

export const getAllJobs = async (res: express.Response) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({ message: "Got jobs successfully", jobs });
};

export const createJob = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const job = await Job.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "New job created successfully", job });
  } catch (error) {
    console.log(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "server error" });
  }
};

export const getJob = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`job with id ${id} doesnot exist`);
  res.status(StatusCodes.OK).json({ message: "job found sucessfully", job });
};

export const updateJob = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: `job with id ${id} doesnot exist` });
    return;
  }

  res
    .status(StatusCodes.OK)
    .json({ message: "job modified successfully", job: updatedJob });
};

export const deleteJob = async (
  req: express.Request,
  res: express.Response
) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: `job with id ${id} doesnot exist. Cannot delete.` });
    return;
  }
  res
    .status(StatusCodes.OK)
    .json({ message: "Job deleted successfully", job: removedJob });
};

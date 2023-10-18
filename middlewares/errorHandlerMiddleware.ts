import { StatusCodes } from "http-status-codes";
import express from "express";

const errorhandlerMiddleware = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: any
) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
};

export default errorhandlerMiddleware;

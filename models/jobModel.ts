import { timeStamp } from "console";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    id: String,
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "default location",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);

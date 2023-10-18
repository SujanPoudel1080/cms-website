"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var jobSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.default.model("Job", jobSchema);

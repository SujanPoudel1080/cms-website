"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
process.env.NODE_ENV === "development" ? app.use((0, morgan_1.default)("dev")) : null;
var port = process.env.PORT || 8000;
app.get("/", function (req, res) {
    res.send("Hello!");
});
app.post("/", function (req, res) {
    res.json({ message: "Data received", status: 200, data: req.body });
});
app.listen(port, function () {
    console.log("Server running at port ".concat(port));
});
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
app.get("/api/v1/jobs", function (req, res) {
    res.status(200).json({ jobs: jobs });
});
app.post("/api/v1/jobs", function (req, res) {
    var _a = req.body, id = _a.id, company = _a.company, position = _a.position;
    if (!id || !company || !position) {
        return res
            .status(400)
            .json({ message: "Please provide company and position" });
    }
    var job = { id: id, company: company, position: position };
    jobs.push(job);
    res.status(200).json({ job: job });
});
app.get("/api/v1/jobs/:id", function (req, res) {
    var id = req.params.id;
    var job = jobs.find(function (job) { return job.id === id; });
    if (!job) {
        return res.status(404).json({ message: "No job with id ".concat(id, " exists") });
    }
    res.status(200).json({ message: "Success", data: job });
});
app.patch("/api/v1/jobs/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, company = _a.company, position = _a.position;
    if (!company && !position) {
        return res
            .status(404)
            .json({ message: "please provide company name and position" });
    }
    var job = jobs.find(function (job) { return job.id === id; });
    if (!job) {
        return res.status(404).json({ message: "No job with id ".concat(id, " exists") });
    }
    job.company = company;
    job.position = position;
    res.status(200).json({ message: "job successfully edited", data: jobs });
});
app.delete("api/v1/jobs/:id", function (req, res) {
    var id = req.params.id;
    var job = jobs.find(function (job) { return job.id === id; });
    if (!job) {
        return res
            .status(404)
            .json({ message: "job with id ".concat(id, " does not exist") });
    }
    var newJob = jobs.filter(function (job) { return job.id !== id; });
    jobs = newJob;
    res.status(200).json({ message: "job deleted successfully", jobs: jobs });
});
app.use("*", function (req, res) {
    res.status(404).json({ message: "Not Found" });
});
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
});

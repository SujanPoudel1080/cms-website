"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("dotenv/config");
var morgan_1 = __importDefault(require("morgan"));
var jobRouter_js_1 = __importDefault(require("./routes/jobRouter.js"));
var db_js_1 = __importDefault(require("./utils/db.js"));
var express_validator_1 = require("express-validator");
var app = (0, express_1.default)();
app.use(express_1.default.json());
process.env.NODE_ENV === "development" ? app.use((0, morgan_1.default)("dev")) : null;
var port = process.env.PORT || 8000;
(0, db_js_1.default)();
app.use("/api/v1/jobs", jobRouter_js_1.default);
app.post("/api/v1/test", [
    (0, express_validator_1.body)("name")
        .notEmpty()
        .withMessage("name is a required field")
        .isLength({ min: 10, max: 40 })
        .withMessage("the name should be at least 10 characters long and at most 40 characters long"),
], function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    var errorMessages = errors.array().map(function (error) { return error.msg; });
    return res.status(400).json({ errors: errorMessages });
    next();
}, function (req, res) {
    var name = req.body.name;
    res.json({ message: "hello ".concat(name), data: req.body });
});
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
app.get("/api/v1/jobs");
app.post("/api/v1/jobs");
app.get("/api/v1/jobs/:id");
app.patch("/api/v1/jobs/:id");
app.delete("api/v1/jobs/:id");
app.use("*", function (req, res) {
    res.status(404).json({ message: "Not Found" });
});
app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.updateJob = exports.getJob = exports.createJob = exports.getAllJobs = void 0;
require("express-async-errors");
var http_status_codes_1 = require("http-status-codes");
var jobModel_js_1 = __importDefault(require("../models/jobModel.js"));
var customErrors_js_1 = require("../utils/customErrors.js");
var getAllJobs = function (res) { return __awaiter(void 0, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, jobModel_js_1.default.find()];
            case 1:
                jobs = _a.sent();
                res.status(http_status_codes_1.StatusCodes.OK).json({ message: "Got jobs successfully", jobs: jobs });
                return [2 /*return*/];
        }
    });
}); };
exports.getAllJobs = getAllJobs;
var createJob = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var job, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, jobModel_js_1.default.create(req.body)];
            case 1:
                job = _a.sent();
                res
                    .status(http_status_codes_1.StatusCodes.CREATED)
                    .json({ message: "New job created successfully", job: job });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                res
                    .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
                    .json({ message: "server error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createJob = createJob;
var getJob = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, job;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, jobModel_js_1.default.findById(id)];
            case 1:
                job = _a.sent();
                if (!job)
                    throw new customErrors_js_1.NotFoundError("job with id ".concat(id, " doesnot exist"));
                res.status(http_status_codes_1.StatusCodes.OK).json({ message: "job found sucessfully", job: job });
                return [2 /*return*/];
        }
    });
}); };
exports.getJob = getJob;
var updateJob = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedJob;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, jobModel_js_1.default.findByIdAndUpdate(id, req.body, {
                        new: true,
                    })];
            case 1:
                updatedJob = _a.sent();
                if (!updatedJob) {
                    res
                        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                        .json({ message: "job with id ".concat(id, " doesnot exist") });
                    return [2 /*return*/];
                }
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json({ message: "job modified successfully", job: updatedJob });
                return [2 /*return*/];
        }
    });
}); };
exports.updateJob = updateJob;
var deleteJob = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, removedJob;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, jobModel_js_1.default.findByIdAndDelete(id)];
            case 1:
                removedJob = _a.sent();
                if (!removedJob) {
                    res
                        .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                        .json({ message: "job with id ".concat(id, " doesnot exist. Cannot delete.") });
                    return [2 /*return*/];
                }
                res
                    .status(http_status_codes_1.StatusCodes.OK)
                    .json({ message: "Job deleted successfully", job: removedJob });
                return [2 /*return*/];
        }
    });
}); };
exports.deleteJob = deleteJob;
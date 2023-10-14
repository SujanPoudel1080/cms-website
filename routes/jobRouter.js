"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var jobController_js_1 = require("../controllers/jobController.js");
router.route("/").get(jobController_js_1.getAllJobs).post(jobController_js_1.createJob);
router.route("/:id").get(jobController_js_1.getJob).patch(jobController_js_1.updateJob).delete(jobController_js_1.deleteJob);
exports.default = router;

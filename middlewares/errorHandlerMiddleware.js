"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorhandlerMiddleware = function (err, req, res, next) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
};
exports.default = errorhandlerMiddleware;

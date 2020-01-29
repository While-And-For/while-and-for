"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var ErrorComponent = function (_a) {
    var error = _a.error, status = _a.status;
    return (react_1.default.createElement(antd_1.Result, { status: status, title: error.name, subTitle: error.message }));
};
exports.default = ErrorComponent;
//# sourceMappingURL=index.js.map
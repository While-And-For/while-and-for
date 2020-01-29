"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var TitleDefault = antd_1.Typography.Title;
var Title = function (_a) {
    var children = _a.children, level = _a.level, style = _a.style;
    return (react_1.default.createElement(TitleDefault, { style: style, level: level }, children));
};
exports.default = Title;
//# sourceMappingURL=Title.js.map
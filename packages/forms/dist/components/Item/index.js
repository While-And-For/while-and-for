"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var formItemLayout_1 = tslib_1.__importDefault(require("../../utilities/formItemLayout"));
var Item = function (_a) {
    var children = _a.children, colon = _a.colon, extra = _a.extra, hasFeedback = _a.hasFeedback, help = _a.help, htmlFor = _a.htmlFor, label = _a.label, labelCol = _a.labelCol, required = _a.required, style = _a.style, validateStatus = _a.validateStatus, wrapperCol = _a.wrapperCol;
    return (react_1.default.createElement(antd_1.Form.Item, { colon: colon, extra: extra, hasFeedback: hasFeedback, help: help, htmlFor: htmlFor, label: label, labelCol: labelCol, required: required, style: style, validateStatus: validateStatus, wrapperCol: wrapperCol }, children));
};
Item.defaultProps = {
    labelCol: formItemLayout_1.default.labelCol,
    wrapperCol: formItemLayout_1.default.wrapperCol
};
exports.default = Item;
//# sourceMappingURL=index.js.map
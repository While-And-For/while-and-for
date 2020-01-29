"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var CheckableTag = antd_1.Tag.CheckableTag;
var TagSelect = function (_a) {
    var field = _a.field, error = _a.error, label = _a.label, options = _a.options, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { help: validate && error, label: label, required: required, validateStatus: validate ? status : '' }, options.map(function (_a) {
        var value = _a.value, label = _a.label;
        return (react_1.default.createElement(CheckableTag, { key: value, checked: value === field.value, onChange: function () { return setFieldValue(value); } }, label));
    })));
};
exports.default = withFieldMeta_1.default(TagSelect);
//# sourceMappingURL=index.js.map
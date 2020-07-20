"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var Option = antd_1.Select.Option;
exports.Option = Option;
var Select = function (_a) {
    var children = _a.children, disabled = _a.disabled, error = _a.error, field = _a.field, label = _a.label, multiple = _a.multiple, onChange = _a.onChange, placeholder = _a.placeholder, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, style = _a.style, touched = _a.touched, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: validate && touched && error, label: label, required: required, validateStatus: validate ? status : '', style: style },
        react_1.default.createElement(antd_1.Select, { defaultValue: field.value, disabled: disabled, onChange: onChange || setFieldValue, mode: multiple ? 'multiple' : undefined, placeholder: placeholder, value: field.value }, children)));
};
Select.defaultProps = {
    multiple: false,
    placeholder: 'Select from dropdown',
    required: false,
    validate: true
};
exports.default = withFieldMeta_1.default(Select);
//# sourceMappingURL=index.js.map
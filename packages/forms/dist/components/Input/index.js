"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var Input = function (_a) {
    var addonAfter = _a.addonAfter, disabled = _a.disabled, error = _a.error, field = _a.field, label = _a.label, placeholder = _a.placeholder, prefix = _a.prefix, required = _a.required, status = _a.status, touched = _a.touched, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: validate && touched && error, label: label, required: required, validateStatus: validate ? status : '' },
        react_1.default.createElement(antd_1.Input, { addonAfter: addonAfter, disabled: disabled, name: field.name, value: field.value, onChange: field.onChange, onBlur: field.onBlur, placeholder: placeholder, prefix: prefix })));
};
Input.defaultProps = {
    addonAfter: undefined,
    error: undefined,
    label: undefined,
    prefix: null,
    required: false,
    validate: true
};
exports.default = withFieldMeta_1.default(Input);
//# sourceMappingURL=index.js.map
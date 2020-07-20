"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var DatePicker = function (_a) {
    var disabled = _a.disabled, error = _a.error, field = _a.field, label = _a.label, placeholder = _a.placeholder, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, touched = _a.touched, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: touched && error, label: label || placeholder, required: required, validateStatus: touched ? status : '' },
        react_1.default.createElement(antd_1.DatePicker, { disabled: disabled, format: "Do MMM YYYY", placeholder: placeholder, name: field.name, onChange: setFieldValue, value: field.value })));
};
DatePicker.defaultProps = {
    error: undefined
};
exports.default = withFieldMeta_1.default(DatePicker);
//# sourceMappingURL=index.js.map
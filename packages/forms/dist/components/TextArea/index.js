"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var TextAreaDefault = antd_1.Input.TextArea;
var TextArea = function (_a) {
    var disabled = _a.disabled, error = _a.error, field = _a.field, label = _a.label, placeholder = _a.placeholder, required = _a.required, status = _a.status, touched = _a.touched, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: validate && touched && error, label: label, required: required, validateStatus: validate ? status : '' },
        react_1.default.createElement(TextAreaDefault, { disabled: disabled, name: field.name, value: field.value, onChange: field.onChange, onBlur: field.onBlur, placeholder: placeholder })));
};
TextArea.defaultProps = {
    required: false,
    validate: true
};
exports.default = withFieldMeta_1.default(TextArea);
//# sourceMappingURL=index.js.map
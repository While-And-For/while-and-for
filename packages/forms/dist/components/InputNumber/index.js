"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var StyledInputNumber = styled_components_1.default(antd_1.InputNumber)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var InputNumber = function (_a) {
    var disabled = _a.disabled, error = _a.error, field = _a.field, formatter = _a.formatter, label = _a.label, parser = _a.parser, placeholder = _a.placeholder, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, touched = _a.touched, validate = _a.validate;
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: validate && touched && error, label: label, required: required, validateStatus: validate ? status : '' },
        react_1.default.createElement(StyledInputNumber, { disabled: disabled, formatter: formatter, name: field.name, value: field.value, onChange: setFieldValue, parser: parser, placeholder: placeholder })));
};
InputNumber.defaultProps = {
    formatter: undefined,
    parser: undefined,
    required: false,
    validate: true
};
exports.default = withFieldMeta_1.default(InputNumber);
var templateObject_1;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var lodash_get_1 = tslib_1.__importDefault(require("lodash.get"));
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
function getStatus(touched, error, validate) {
    if (validate === void 0) { validate = true; }
    if (!touched || !validate)
        return undefined;
    return error ? 'error' : 'success';
}
function withFieldMeta(WrappedComponent) {
    var FieldMeta = function (_a) {
        var field = _a.field, _b = _a.form, errors = _b.errors, touched = _b.touched, setFieldValue = _b.setFieldValue, label = _a.label, placeholder = _a.placeholder, prefix = _a.prefix, required = _a.required, style = _a.style, validate = _a.validate, props = tslib_1.__rest(_a, ["field", "form", "label", "placeholder", "prefix", "required", "style", "validate"]);
        var name = field.name;
        var error = lodash_get_1.default(errors, name);
        var fieldTouched = lodash_get_1.default(touched, name);
        var status = getStatus(fieldTouched, error, validate);
        return (react_1.default.createElement(WrappedComponent, tslib_1.__assign({}, props, { error: error, field: field, label: label || placeholder, name: name, placeholder: placeholder, prefix: prefix, required: required, setFieldValue: function (value) { return setFieldValue(name, value); }, status: status, style: style, touched: fieldTouched })));
    };
    FieldMeta.defaultProps = {
        validate: true
    };
    FieldMeta.displayName = "withFieldMeta(" + getDisplayName(WrappedComponent) + ")";
    return FieldMeta;
}
exports.default = withFieldMeta;
//# sourceMappingURL=withFieldMeta.js.map
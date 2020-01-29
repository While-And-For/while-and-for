"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var CountryCodes_1 = tslib_1.__importDefault(require("./CountryCodes"));
var data_1 = tslib_1.__importDefault(require("./data"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var getPrefix = function (phone) {
    if (!phone)
        return data_1.default[0].value;
    var prefix = data_1.default.find(function (_a) {
        var value = _a.value;
        return phone.startsWith(value);
    });
    return prefix ? prefix.value : '';
};
var Phone = function (_a) {
    var error = _a.error, field = _a.field, label = _a.label, placeholder = _a.placeholder, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, touched = _a.touched, validate = _a.validate;
    var _b = react_1.useState(getPrefix(field.value)), prefix = _b[0], setPrefix = _b[1];
    var inputValue = prefix && field.value ? field.value.slice(prefix.length) : '';
    react_1.useEffect(function () {
        var subStr = getPrefix(field.value);
        if (subStr !== prefix) {
            setPrefix(prefix || subStr);
            setFieldValue(prefix + inputValue);
        }
        if (field.value !== prefix + inputValue)
            setFieldValue(prefix + inputValue);
    }, [field.value, setPrefix, prefix, setFieldValue, inputValue]);
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: validate && touched && error, label: label, required: required, validateStatus: validate ? status : '' },
        react_1.default.createElement(antd_1.Input, { name: field.name, value: inputValue, onChange: function (_a) {
                var value = _a.target.value;
                setFieldValue(prefix + value);
            }, onBlur: field.onBlur, placeholder: placeholder, addonBefore: react_1.default.createElement(CountryCodes_1.default, { prefix: prefix, setPrefix: setPrefix }) })));
};
exports.default = withFieldMeta_1.default(Phone);
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var antd_1 = require("antd");
var Item_1 = tslib_1.__importDefault(require("../Item"));
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var lower = function (value) { return value.toLowerCase(); };
var AutoComplete = function (_a) {
    var dataSource = _a.dataSource, error = _a.error, field = _a.field, label = _a.label, placeholder = _a.placeholder, required = _a.required, setFieldValue = _a.setFieldValue, status = _a.status, touched = _a.touched, validate = _a.validate;
    var _b = react_1.useState(dataSource), data = _b[0], setData = _b[1];
    var handleSearch = function (nextValue) {
        if (!nextValue) {
            setData(dataSource);
            return;
        }
        var filtered = dataSource.filter(function (option) { return !!lower(option).includes(lower(nextValue)); });
        setData(filtered);
    };
    return (react_1.default.createElement(Item_1.default, { hasFeedback: validate, help: touched && error, label: label || placeholder, required: required, validateStatus: validate ? status : undefined },
        react_1.default.createElement(antd_1.AutoComplete, { dataSource: data, onChange: setFieldValue, onSelect: setFieldValue, onSearch: handleSearch, placeholder: placeholder, value: field.value })));
};
exports.default = withFieldMeta_1.default(AutoComplete);
//# sourceMappingURL=index.js.map
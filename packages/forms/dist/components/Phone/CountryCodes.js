"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var data_1 = tslib_1.__importDefault(require("./data"));
var Option = antd_1.Select.Option;
var CountryCodes = function (_a) {
    var prefix = _a.prefix, setPrefix = _a.setPrefix;
    return (react_1.default.createElement(antd_1.Select, { style: { minWidth: '97px' }, optionFilterProp: "children", onChange: setPrefix, placeholder: "NZ (+64)", value: prefix }, data_1.default.map(function (_a) {
        var name = _a.name, value = _a.value;
        return (react_1.default.createElement(Option, { key: value, value: value }, name));
    })));
};
exports.default = CountryCodes;
//# sourceMappingURL=CountryCodes.js.map
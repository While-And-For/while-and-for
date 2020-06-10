"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPhone = exports.date = exports.fromCurrency = exports.toCurrency = void 0;
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
exports.toCurrency = function (sign) {
    if (sign === void 0) { sign = '$'; }
    return function (a) {
        return a ? (sign + " " + a).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : a;
    };
};
exports.fromCurrency = function (b) {
    return b ? b.replace(/\$\s?|\€\s?|\£\s?|(,*)/g, '') : b;
};
exports.date = function (c, d) {
    return c ? moment_1.default(c).format('Do MMM YYYY') : d;
};
exports.toPhone = function (e) {
    return e ? e.replace(/^0{2}/g, '+') : e;
};
//# sourceMappingURL=formatters.js.map
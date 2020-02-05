"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var moment_1 = tslib_1.__importDefault(require("moment"));
exports.toCurrency = function (a) {
    return a ? ("$ " + a).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : a;
};
exports.fromCurrency = function (b) {
    return b ? b.replace(/\$\s?|(,*)/g, '') : b;
};
exports.date = function (c, d) {
    return c ? moment_1.default(c).format('Do MMM YYYY') : d;
};
exports.toPhone = function (e) {
    return e ? e.replace(/^0{2}/g, '+') : e;
};
//# sourceMappingURL=formatters.js.map
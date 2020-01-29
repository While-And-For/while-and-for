"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var handleSubmit = function (_a) {
    var submit = _a.submit, onError = _a.onError, onSuccess = _a.onSuccess;
    return function (values, form) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, err_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4, submit(values)];
                case 1:
                    result = _a.sent();
                    onSuccess && typeof onSuccess === 'function' && onSuccess(result);
                    return [3, 4];
                case 2:
                    err_1 = _a.sent();
                    onError && typeof onError === 'function' && onError(err_1);
                    return [3, 4];
                case 3:
                    form.setSubmitting(false);
                    return [7];
                case 4: return [2];
            }
        });
    }); };
};
exports.default = handleSubmit;
//# sourceMappingURL=handleSubmit.js.map
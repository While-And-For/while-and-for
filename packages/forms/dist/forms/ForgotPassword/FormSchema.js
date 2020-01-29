"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Yup = tslib_1.__importStar(require("yup"));
exports.default = Yup.object().shape({
    email: Yup.string()
        .required('email is required')
        .email('not a valid email')
});
//# sourceMappingURL=FormSchema.js.map
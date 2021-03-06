"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Yup = tslib_1.__importStar(require("yup"));
exports.default = Yup.object().shape({
    password: Yup.string().required('password is required'),
    repeatPassword: Yup.string()
        .required('repeat password is required')
        .oneOf([Yup.ref('password')], 'passwords must match')
});
//# sourceMappingURL=FormSchema.js.map
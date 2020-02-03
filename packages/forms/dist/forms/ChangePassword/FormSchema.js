"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Yup = tslib_1.__importStar(require("yup"));
exports.default = Yup.object().shape({
    currentPassword: Yup.string().required('current password required'),
    password: Yup.string().required('new password required'),
    repeatPassword: Yup.string()
        .required('repeat password is required')
        .oneOf([Yup.ref('password'), null], 'passwords must match')
});
//# sourceMappingURL=FormSchema.js.map
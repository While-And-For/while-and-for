"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var formik_1 = require("formik");
var antd_1 = require("antd");
var components_1 = require("../../components");
var FormSchema_1 = tslib_1.__importDefault(require("./FormSchema"));
var utilities_1 = require("../../utilities");
var initialValues = {
    password: undefined,
    repeatPassword: undefined
};
var ResetPassword = function (_a) {
    var onError = _a.onError, onSuccess = _a.onSuccess, submit = _a.submit;
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: utilities_1.handleSubmit({
            onError: onError,
            onSuccess: onSuccess,
            submit: submit
        }), validationSchema: FormSchema_1.default }, function (_a) {
        var isSubmitting = _a.isSubmitting;
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { required: true, type: "password", name: "password", placeholder: "Password", component: components_1.Password }),
            react_1.default.createElement(formik_1.Field, { required: true, type: "password", name: "repeatPassword", placeholder: "Password", component: components_1.Password }),
            react_1.default.createElement(antd_1.Button, { block: true, type: "primary", htmlType: "submit", disabled: isSubmitting, loading: isSubmitting }, "Submit")));
    }));
};
exports.default = ResetPassword;
//# sourceMappingURL=index.js.map
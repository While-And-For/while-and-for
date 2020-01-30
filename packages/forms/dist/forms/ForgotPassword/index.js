"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var formik_1 = require("formik");
var components_1 = require("../../components");
var utilities_1 = require("../../utilities");
var FormSchema_1 = tslib_1.__importDefault(require("./FormSchema"));
var initialValues = { email: undefined };
var ForgotPassword = function (_a) {
    var onError = _a.onError, onSuccess = _a.onSuccess, submit = _a.submit;
    return (react_1.default.createElement(formik_1.Formik, { initialValues: initialValues, onSubmit: utilities_1.handleSubmit({
            onError: onError,
            onSuccess: onSuccess,
            submit: submit
        }), validationSchema: FormSchema_1.default }, function (_a) {
        var isSubmitting = _a.isSubmitting;
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { name: "email", placeholder: "Email", prefix: react_1.default.createElement(antd_1.Icon, { type: "user", style: { color: 'rgba(0, 0, 0, 0.25)' } }), component: components_1.Input }),
            react_1.default.createElement(antd_1.Button, { block: true, disabled: isSubmitting, loading: isSubmitting, type: "primary", htmlType: "submit" }, "Submit")));
    }));
};
exports.default = ForgotPassword;
//# sourceMappingURL=index.js.map
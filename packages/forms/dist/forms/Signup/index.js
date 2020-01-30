"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Yup = tslib_1.__importStar(require("yup"));
var antd_1 = require("antd");
var formik_1 = require("formik");
var FormSchema_1 = tslib_1.__importDefault(require("./FormSchema"));
var components_1 = require("../../components");
var utilities_1 = require("../../utilities");
var Signup = function (_a) {
    var include = _a.include, onError = _a.onError, onSuccess = _a.onSuccess, submit = _a.submit;
    var firstName = include.firstName, lastName = include.lastName;
    return (react_1.default.createElement(formik_1.Formik, { initialValues: tslib_1.__assign(tslib_1.__assign({ email: undefined, password: undefined, repeatPassword: undefined }, (firstName && { firstName: undefined })), (lastName && { lastName: undefined })), onSubmit: utilities_1.handleSubmit({
            onError: onError,
            onSuccess: onSuccess,
            submit: submit
        }), validationSchema: FormSchema_1.default }, function (_a) {
        var isSubmitting = _a.isSubmitting;
        return (react_1.default.createElement(formik_1.Form, null,
            react_1.default.createElement(formik_1.Field, { name: "email", component: components_1.Input, placeholder: "Email", prefix: react_1.default.createElement(antd_1.Icon, { type: "user", style: { color: 'rgba(0, 0, 0, 0.25)' } }) }),
            firstName && (react_1.default.createElement(formik_1.Field, { name: "firstName", component: components_1.Input, placeholder: "First name", validate: function (value) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var err_1;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4, Yup.string()
                                        .required('first name is required')
                                        .validate(value)];
                            case 1:
                                _a.sent();
                                return [2, undefined];
                            case 2:
                                err_1 = _a.sent();
                                return [2, err_1.errors];
                            case 3: return [2];
                        }
                    });
                }); } })),
            lastName && (react_1.default.createElement(formik_1.Field, { name: "lastName", component: components_1.Input, placeholder: "Last name", validate: function (value) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var err_2;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4, Yup.string()
                                        .required('last name is required')
                                        .validate(value)];
                            case 1:
                                _a.sent();
                                return [2, undefined];
                            case 2:
                                err_2 = _a.sent();
                                return [2, err_2.errors];
                            case 3: return [2];
                        }
                    });
                }); } })),
            react_1.default.createElement(formik_1.Field, { name: "password", component: components_1.Password, placeholder: "Password" }),
            react_1.default.createElement(formik_1.Field, { name: "repeatPassword", component: components_1.Password, placeholder: "Repeat password" }),
            react_1.default.createElement(antd_1.Button, { block: true, disabled: isSubmitting, loading: isSubmitting, htmlType: "submit", type: "primary" }, "Submit")));
    }));
};
Signup.defaultProps = {
    include: {
        firstName: false,
        lastName: false
    }
};
exports.default = Signup;
//# sourceMappingURL=index.js.map
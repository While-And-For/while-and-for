"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item_1 = tslib_1.__importDefault(require("../Item"));
var Text = antd_1.Typography.Text;
var Switch = function (_a) {
    var children = _a.children, field = _a.field, onChange = _a.onChange;
    return (react_1.default.createElement(Item_1.default, null,
        react_1.default.createElement(antd_1.Row, { justify: "space-between" },
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(Text, null, children)),
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(antd_1.Switch, { checked: field.value, onChange: onChange || field.onChange })))));
};
exports.default = withFieldMeta_1.default(Switch);
//# sourceMappingURL=index.js.map
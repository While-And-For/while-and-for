"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var antd_1 = require("antd");
var withFieldMeta_1 = tslib_1.__importDefault(require("../../utilities/withFieldMeta"));
var Item = antd_1.Form.Item;
var TextDefault = antd_1.Typography.Text;
var Text = styled_components_1.default(TextDefault)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  line-height: 1.5 !important;\n"], ["\n  line-height: 1.5 !important;\n"])));
var Checkbox = function (_a) {
    var children = _a.children, field = _a.field, onChange = _a.onChange, setFieldValue = _a.setFieldValue;
    return (react_1.default.createElement(Item, null,
        react_1.default.createElement(antd_1.Checkbox, { checked: field.value, name: field.name, onChange: function (_a) {
                var checked = _a.target.checked;
                if (typeof onChange === 'function') {
                    onChange(checked);
                    return;
                }
                setFieldValue(checked);
            } }),
        "\u00A0",
        react_1.default.createElement(Text, null, children),
        react_1.default.createElement("br", null)));
};
exports.default = withFieldMeta_1.default(Checkbox);
var templateObject_1;
//# sourceMappingURL=index.js.map
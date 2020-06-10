"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var Title = antd_1.Typography.Title;
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-around;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: space-around;\n"])));
var Row = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var CustomIcon = styled_components_1.default(icons_1.Loading3QuartersOutlined)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  font-size: 4em;\n  color: #e80044;\n  margin-bottom: 25px;\n"], ["\n  font-size: 4em;\n  color: #e80044;\n  margin-bottom: 25px;\n"])));
var Loading = function () { return (react_1.default.createElement(Container, null,
    react_1.default.createElement(Row, null,
        react_1.default.createElement(CustomIcon, { spin: true, type: "loading" }),
        react_1.default.createElement(Title, { level: 4 }, "loading...")))); };
exports.default = Loading;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map
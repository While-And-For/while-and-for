"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var H3_1 = tslib_1.__importDefault(require("../typography/H3"));
var ErrorBoundary = (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { hasError: false, error: undefined };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        console.warn('ErrorBoundary: ', error);
        return { hasError: true, error: error };
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, children = _a.children, ErrorComponent = _a.ErrorComponent;
        var hasError = this.state.hasError;
        if (hasError) {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(H3_1.default, null, "Something went wrong!"),
                ErrorComponent));
        }
        return children;
    };
    ErrorBoundary.defaultProps = {
        ErrorComponent: null
    };
    return ErrorBoundary;
}(react_1.Component));
exports.default = ErrorBoundary;
//# sourceMappingURL=index.js.map
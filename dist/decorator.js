"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withReactRouter = void 0;

var _react = _interopRequireDefault(require("react"));

var _addons = require("@storybook/addons");

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withReactRouter = (0, _addons.makeDecorator)({
  name: 'withReactRouter',
  parameterName: 'router',
  wrapper: function wrapper(getStory, context, _ref) {
    var parameters = _ref.parameters;
    return _react["default"].createElement(_reactRouter.MemoryRouter, parameters, getStory(context));
  }
});
exports.withReactRouter = withReactRouter;
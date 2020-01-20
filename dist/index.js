"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _decorator = require("./decorator");

Object.keys(_decorator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decorator[key];
    }
  });
});
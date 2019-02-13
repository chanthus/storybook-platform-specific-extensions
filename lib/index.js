"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dynamicStorybook = require("./dynamicStorybook.js");

Object.keys(_dynamicStorybook).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dynamicStorybook[key];
    }
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dynamicStoryBook = require("./dynamicStoryBook.js");

Object.keys(_dynamicStoryBook).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dynamicStoryBook[key];
    }
  });
});
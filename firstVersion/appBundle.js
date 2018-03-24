/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xact = __webpack_require__(1);

var _xact2 = _interopRequireDefault(_xact);

var _xactDOM = __webpack_require__(2);

var _xactDOM2 = _interopRequireDefault(_xactDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var element = function element() {
  return _xact2.default.createElement(
    'div',
    null,
    'Hello world',
    _xact2.default.createElement('img', { src: '/public/images/hello.jpeg', alt: 'hello', 'cv-data': 'hello' }),
    _xact2.default.createElement(
      'span',
      null,
      'lalal',
      _xact2.default.createElement(
        'div',
        null,
        'fjfjf'
      )
    ),
    'Something Behind'
  );
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

var user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

var element2 = _xact2.default.createElement(
  'h1',
  null,
  'Hello, ',
  formatName(user),
  '!'
);

var root = document.querySelector("#root");

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   xactDOM.render(element, root);
// }

// setInterval(tick, 1000);

_xactDOM2.default.render(_xact2.default.createElement('element2', null), root);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Component = function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props;
    this.state = {};
  }

  _createClass(Component, [{
    key: "setState",
    value: function setState(partialState) {
      var newState = Object.assign({}, this.state, partialState);
      notifyUpdate(newState);
    }
  }]);

  return Component;
}();

/** 
 * xactElement = {
 *  type: string
 *  props: {
 *    attributes,
 *    listener,
 *    children: [xactElements]
 * }
 * }
*/

function createElement(tag, attributes) {
  var element = {};
  var props = {};

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  if (args.length > 0) {
    args.forEach(function (item, index) {
      var node = null;
      if (typeof item === "string") {
        node = {
          type: "TEXT_NODE",
          props: {
            nodeValue: item
          }
        };
      } else {
        node = item;
      }

      props.children ? props.children.push(node) : props.children = [node];
    });
  }
  if (attributes !== null) {
    Object.keys(attributes).forEach(function (key) {
      props[key] = attributes[key];
    });
  }
  element.type = tag;
  element.props = props;
  return element;
}

exports.default = {
  Component: Component,
  createElement: createElement

  /*
  xact element = {
    type: HTML tag name or TEXT_NODE,
    props: {
  
    }
  }
  */

};

var xactDOM = exports.xactDOM = function () {
  function xactDOM() {
    _classCallCheck(this, xactDOM);
  }

  _createClass(xactDOM, null, [{
    key: "render",
    value: function render(ele, domContainer) {}
  }]);

  return xactDOM;
}();

function notifyUpdate(state) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/* element = {
  type: string, 
  props: object
} 
*/
function render(element, domContainer) {
  var children = [];
  var parentNode = domContainer || document.querySelector("body");
  var currentNode = null;
  if (element.type === "TEXT_NODE") {
    currentNode = document.createTextNode(element.props.nodeValue);
  } else {
    currentNode = document.createElement(element.type);
    var props = element.props || {};

    Object.keys(props).forEach(function (key) {
      if (/on/.test(key)) {
        var event = key.substring(2);
        currentNode.addEventListener(event, props[key]);
      } else if (key !== "children") {
        currentNode.setAttribute(key, props[key]);
      } else {
        if (element.props.children.length > 0) {
          children = element.props.children;
          children.forEach(function (child) {
            render(child, currentNode);
          });
        }
      }
    });
  }

  domContainer.appendChild(currentNode);
}

exports.default = {
  render: render
};

/***/ })
/******/ ]);
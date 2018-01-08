window["yelpBundle"] =
webpackJsonp_name_([0],{

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"nav",
					{ className: "navbar navbar-inverse navbar-fixed-top" },
					_react2.default.createElement(
						"div",
						{ className: "container" },
						_react2.default.createElement(
							"div",
							{ className: "navbar-header" },
							_react2.default.createElement(
								"button",
								{ type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar",
									"aria-expanded": "false",
									"aria-controls": "navbar" },
								_react2.default.createElement(
									"span",
									{ className: "sr-only" },
									"Toggle navigation"
								),
								_react2.default.createElement("span", { className: "icon-bar" }),
								_react2.default.createElement("span", { className: "icon-bar" }),
								_react2.default.createElement("span", { className: "icon-bar" })
							),
							_react2.default.createElement(
								"a",
								{ className: "navbar-brand", href: "#" },
								"Yelp Clone"
							)
						),
						_react2.default.createElement(
							"div",
							{ id: "navbar", className: "navbar-collapse collapse" },
							_react2.default.createElement(
								"form",
								{ className: "navbar-form navbar-right" },
								_react2.default.createElement(
									"div",
									{ className: "form-group" },
									_react2.default.createElement("input", { type: "text", placeholder: "Email", className: "form-control" })
								),
								_react2.default.createElement(
									"div",
									{ className: "form-group" },
									_react2.default.createElement("input", { type: "password", placeholder: "Password", className: "form-control" })
								),
								_react2.default.createElement(
									"button",
									{ type: "submit", className: "btn btn-success" },
									"Sign in"
								)
							)
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "jumbotron" },
					_react2.default.createElement(
						"div",
						{ className: "container" },
						_react2.default.createElement(
							"h1",
							null,
							"Hello, world!"
						),
						_react2.default.createElement(
							"p",
							null,
							"This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique."
						),
						_react2.default.createElement(
							"p",
							null,
							_react2.default.createElement(
								"a",
								{ className: "btn btn-primary btn-lg", href: "#", role: "button" },
								"Learn more \xBB"
							)
						)
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "container" },
					_react2.default.createElement(
						"div",
						{ className: "row" },
						_react2.default.createElement(
							"div",
							{ className: "col-md-4" },
							_react2.default.createElement(
								"h2",
								null,
								"Heading"
							),
							_react2.default.createElement(
								"p",
								null,
								"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
							),
							_react2.default.createElement(
								"p",
								null,
								_react2.default.createElement(
									"a",
									{ className: "btn btn-default", href: "#", role: "button" },
									"View details \xBB"
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-4" },
							_react2.default.createElement(
								"h2",
								null,
								"Heading"
							),
							_react2.default.createElement(
								"p",
								null,
								"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
							),
							_react2.default.createElement(
								"p",
								null,
								_react2.default.createElement(
									"a",
									{ className: "btn btn-default", href: "#", role: "button" },
									"View details \xBB"
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-4" },
							_react2.default.createElement(
								"h2",
								null,
								"Heading"
							),
							_react2.default.createElement(
								"p",
								null,
								"Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
							),
							_react2.default.createElement(
								"p",
								null,
								_react2.default.createElement(
									"a",
									{ className: "btn btn-default", href: "#", role: "button" },
									"View details \xBB"
								)
							)
						)
					),
					_react2.default.createElement("hr", null),
					_react2.default.createElement(
						"footer",
						null,
						_react2.default.createElement(
							"p",
							null,
							"\xA9 2016 Company, Inc."
						)
					)
				)
			);
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('body'));

/***/ })

},[380])["default"];
//# sourceMappingURL=yelpBundle.js.map
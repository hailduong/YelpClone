window["yelpBundle"] =
webpackJsonp_name_([0],{

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(380);


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchBar = __webpack_require__(381);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Navbar = __webpack_require__(382);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _BusinessItem = __webpack_require__(383);

var _BusinessItem2 = _interopRequireDefault(_BusinessItem);

var _Pagination = __webpack_require__(384);

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, App);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			searchData: []
		}, _this.setSearchResultData = function (data) {
			_this.setState({
				searchData: data
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {

			var self = this;

			var actions = {
				setSearchResultData: self.setSearchResultData
			};

			var state = this.state;
			var businessData = this.state.searchData.businesses;

			var searchResultNodes = !!businessData ? this.state.searchData.businesses.map(function (item) {
				return _react2.default.createElement(_BusinessItem2.default, { key: item.id, data: item });
			}) : null;

			return _react2.default.createElement(
				"div",
				{ className: "home" },
				_react2.default.createElement(_Navbar2.default, null),
				_react2.default.createElement(_SearchBar2.default, { actions: actions }),
				_react2.default.createElement(
					"div",
					{ className: "container" },
					_react2.default.createElement(
						"div",
						{ className: "row" },
						_react2.default.createElement(
							"div",
							{ className: "col-md-8 home__search-result" },
							searchResultNodes
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-4 home__sidebar" },
							"This is a side bar"
						)
					),
					_react2.default.createElement(_Pagination2.default, null),
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

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#yelpClone'));

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
	_inherits(SearchBar, _React$Component);

	function SearchBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, SearchBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			currentKeyword: ''
		}, _this.handleKeywordChange = function (event) {
			console.log(event.target.value);
			_this.setState({
				currentKeyword: event.target.value
			});
		}, _this.handleKeywordKeyUp = function (event) {
			if (!!_this.keywordKeyUpTimeout) clearTimeout(_this.keywordKeyUpTimeout);
			_this.keywordKeyUpTimeout = setTimeout(function () {
				_this.getAutoCompleteContent();
			}, 200);
		}, _this.handleSearch = function () {
			jQuery.ajax({
				url: 'ajax/search',
				method: 'POST',
				data: {
					term: _this.state.currentKeyword,
					longitude: -122.399972,
					latitude: 37.786882,
					offset: 10,
					limit: 10
				},
				crossDomain: true,
				success: function success(data) {
					console.log('Searched and received data.');
					_this.props.actions.setSearchResultData(data.data);
				},
				error: function error(_error) {
					console.warn(_error);
				}
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(SearchBar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "jumbotron" },
				_react2.default.createElement(
					"div",
					{ className: "container" },
					_react2.default.createElement(
						"h3",
						null,
						"Search for the best places"
					),
					_react2.default.createElement(
						"form",
						{ className: "form-horizontal row" },
						_react2.default.createElement(
							"div",
							{ className: "col-md-5" },
							_react2.default.createElement("input", { type: "text", value: this.state.currentKeyword,
								onChange: this.handleKeywordChange,
								onKeyUp: this.handleKeywordKeyUp,
								className: "form-control", placeholder: "Find" })
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-5" },
							_react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Near" })
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-2" },
							_react2.default.createElement(
								"button",
								{ type: "button", onClick: this.handleSearch, className: "btn btn-primary form-control" },
								"Search"
							)
						)
					)
				)
			);
		}
	}, {
		key: "getAutoCompleteContent",
		value: function getAutoCompleteContent() {
			jQuery.ajax({
				url: 'ajax/autocomplete',
				method: 'POST',
				data: { text: this.state.currentKeyword },
				crossDomain: true,
				success: function success(data) {
					console.log('data', data);
				},
				error: function error(_error2) {
					console.warn(_error2);
				}
			});
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
	_inherits(Navbar, _React$Component);

	function Navbar() {
		_classCallCheck(this, Navbar);

		return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
	}

	_createClass(Navbar, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
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
			);
		}
	}]);

	return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BusinessItem = function (_React$Component) {
	_inherits(BusinessItem, _React$Component);

	function BusinessItem() {
		_classCallCheck(this, BusinessItem);

		return _possibleConstructorReturn(this, (BusinessItem.__proto__ || Object.getPrototypeOf(BusinessItem)).apply(this, arguments));
	}

	_createClass(BusinessItem, [{
		key: "render",
		value: function render() {
			var _props$data = this.props.data,
			    image_url = _props$data.image_url,
			    name = _props$data.name,
			    display_phone = _props$data.display_phone,
			    location = _props$data.location,
			    categories = _props$data.categories;

			var address = location.display_address.join(" ");
			var displayCategory = categories.map(function (item) {
				return item.title;
			}).join(" ,");
			return _react2.default.createElement(
				"div",
				{ className: "row home__business" },
				_react2.default.createElement(
					"div",
					{ className: "col-md-3 logo" },
					_react2.default.createElement("img", { className: "img-responsive", src: image_url, alt: name })
				),
				_react2.default.createElement(
					"div",
					{ className: "col-md-9 info" },
					_react2.default.createElement(
						"h2",
						{ className: "name" },
						name
					),
					_react2.default.createElement(
						"p",
						{ className: "address" },
						address
					),
					_react2.default.createElement(
						"p",
						{ className: "phone" },
						display_phone
					),
					_react2.default.createElement(
						"p",
						null,
						"Category: ",
						displayCategory
					)
				)
			);
		}
	}]);

	return BusinessItem;
}(_react2.default.Component);

exports.default = BusinessItem;

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(30);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
	_inherits(Pagination, _React$Component);

	function Pagination() {
		_classCallCheck(this, Pagination);

		return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
	}

	_createClass(Pagination, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "text-center home__pagination" },
				_react2.default.createElement(
					"nav",
					{ "aria-label": "Page navigation" },
					_react2.default.createElement(
						"ul",
						{ "class": "pagination" },
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#", "aria-label": "Previous" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"\xAB"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								"1"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								"2"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								"3"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								"4"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								"5"
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#", "aria-label": "Next" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"\xBB"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Pagination;
}(_react2.default.Component);

exports.default = Pagination;

/***/ })

},[379])["default"];
//# sourceMappingURL=yelpBundle.js.map
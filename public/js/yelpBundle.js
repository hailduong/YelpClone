window["yelpBundle"] =
webpackJsonp_name_([0],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultLocation = exports.defaultLocation = "San Fransisco";
var itemPerPage = exports.itemPerPage = 10;

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SearchBar = __webpack_require__(382);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _Navbar = __webpack_require__(383);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _BusinessItem = __webpack_require__(384);

var _BusinessItem2 = _interopRequireDefault(_BusinessItem);

var _Pagination = __webpack_require__(385);

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
			searchData: [],
			locationFromLastSearch: "",
			keywordFromLastSearch: "",
			currentPage: 0
		}, _this.setSearchResultData = function (data) {
			_this.setState({
				searchData: data
			});
		}, _this.setDataLastSearch = function (keyword, location) {
			_this.setState({
				keywordFromLastSearch: keyword,
				locationFromLastSearch: location
			});
		}, _this.setCurrentPage = function (pageNumber) {
			_this.setState({
				currentPage: pageNumber
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(App, [{
		key: "render",
		value: function render() {

			var self = this;

			var actions = {
				setSearchResultData: self.setSearchResultData,
				setDataLastSearch: self.setDataLastSearch
			};

			var locationFromLastSearch = this.state.locationFromLastSearch;
			var keywordFromLastSearch = this.state.keywordFromLastSearch;
			var businessData = this.state.searchData.businesses;
			var totalResultFound = this.state.searchData.total;

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
					_react2.default.createElement("div", { className: "row" }),
					_react2.default.createElement(
						"div",
						{ className: "col-md-12" },
						_react2.default.createElement(
							"h4",
							null,
							_react2.default.createElement(
								"strong",
								null,
								totalResultFound
							),
							" results found for ",
							keywordFromLastSearch,
							" from ",
							locationFromLastSearch
						)
					),
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
					_react2.default.createElement(_Pagination2.default, { currentPage: this.state.currentPage,
						setCurrentPage: this.setCurrentPage,
						totalResultFound: totalResultFound
					}),
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _configs = __webpack_require__(144);

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
			currentKeyword: '',
			currentLocation: '',
			currentPage: 1,
			autoSuggestData: {},
			keywordFieldIsFocused: false
		}, _this.handleKeywordChange = function (event) {
			_this.setState({
				currentKeyword: event.target.value
			});
		}, _this.handleKeywordBlur = function (event) {
			if (!!_this.keywordBlurTimeout) clearTimeout(_this.keywordBlurTimeout);

			_this.keywordBlurTimeout = setTimeout(function () {
				_this.setState({
					keywordFieldIsFocused: false
				});
			}, 100);
		}, _this.handleKeywordFocus = function (event) {
			_this.setState({
				keywordFieldIsFocused: true
			});
		}, _this.handleLocationChange = function (event) {
			_this.setState({
				currentLocation: event.target.value
			});
		}, _this.handleKeywordKeyUp = function (event) {
			if (!!_this.keywordKeyUpTimeout) clearTimeout(_this.keywordKeyUpTimeout);
			_this.keywordKeyUpTimeout = setTimeout(function () {
				_this.getAutoCompleteContent();
			}, 200);
		}, _this.getCurrentLocation = function () {
			var self = _this;
			// Init geoCoder
			if (!_this.geoCoder) _this.geoCoder = new google.maps.Geocoder();
			var geoCoder = _this.geoCoder;
			var latLongPromise = _this.getCurrentLatLong();

			latLongPromise.then(function (latLng) {
				geoCoder.geocode({ 'location': latLng }, function (results, status) {
					console.log('Location received:', results);
					var currentCityComponent = results[0].address_components.filter(function (item) {
						return item.types[0] === "administrative_area_level_1";
					});
					var cityName = currentCityComponent[0].long_name;
					self.setState({
						currentLocation: cityName
					});
				});
			});
		}, _this.getCurrentLatLong = function () {
			if ("geolocation" in navigator) {

				var latLongPromise = new Promise(function (resolve, reject) {
					navigator.geolocation.getCurrentPosition(function (position) {
						console.log('Current location:', position.coords.latitude, position.coords.longitude);
						resolve({
							lng: position.coords.longitude,
							lat: position.coords.latitude
						});
					});
				});

				return latLongPromise;
			} else {
				console.log('Geolocation is not avabilable');
			}
		}, _this.handleClickSearchBtn = function () {
			_this.search(_this.state.currentKeyword);
		}, _this.search = function () {
			var keyword = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
			var page = arguments[1];
			var currentPage = _this.state.currentPage;


			if (!page) page = currentPage;
			var currentLocation = _this.state.currentLocation;

			if (!currentLocation) currentLocation = _configs.defaultLocation; // There will be results from this location
			_this.props.actions.setDataLastSearch(keyword, currentLocation);

			var offset = (page - 1) * _configs.itemPerPage;

			var postObject = {
				term: keyword,
				offset: offset,
				limit: 10,
				location: currentLocation
			};

			jQuery.ajax({
				url: 'ajax/search',
				method: 'POST',
				data: postObject,
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
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.currentPage !== nextProps.currentPage) {
				this.search(this.state.currentKeyword, nextProps.currentPage);
			}
		}
	}, {
		key: "render",
		value: function render() {

			var self = this;

			var keywordFieldIsFocused = this.state.keywordFieldIsFocused;


			var autoSuggestionItemTemplate = function autoSuggestionItemTemplate(text) {

				var setKeyword = function setKeyword() {
					self.setState({
						currentKeyword: text
					}, self.search(text));
				};

				return _react2.default.createElement(
					"li",
					{ onClick: setKeyword, key: text },
					text
				);
			};

			var thereAreTerms = !!this.state.autoSuggestData.terms;
			var dropdownItems = thereAreTerms ? this.state.autoSuggestData.terms.map(function (term) {
				return autoSuggestionItemTemplate(term.text);
			}) : null;

			var dropDownShouldBeOpen = keywordFieldIsFocused && thereAreTerms;

			return _react2.default.createElement(
				"div",
				{ className: "jumbotron home__search-bar" },
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
								onBlur: this.handleKeywordBlur,
								onFocus: this.handleKeywordFocus,
								className: "form-control", placeholder: "Keyword: e.g. Food, drinks, etc..." }),
							_react2.default.createElement(
								"div",
								{ className: "dropdown " + (dropDownShouldBeOpen ? "open" : "") },
								_react2.default.createElement(
									"ul",
									{ className: "dropdown-menu animated fadeIn", "aria-labelledby": "dLabel" },
									dropdownItems
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-5" },
							_react2.default.createElement(
								"div",
								{ className: "input-group" },
								_react2.default.createElement("input", { type: "text", className: "form-control",
									placeholder: "Location: e.g. San Fransisco",
									onChange: this.handleLocationChange,
									value: this.state.currentLocation
								}),
								_react2.default.createElement(
									"span",
									{ className: "input-group-addon get-location", onClick: this.getCurrentLocation },
									_react2.default.createElement("span", { title: "Get your current location", className: "glyphicon glyphicon-screenshot" })
								)
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "col-md-2" },
							_react2.default.createElement(
								"button",
								{ type: "button", onClick: this.handleClickSearchBtn, className: "btn btn-primary form-control" },
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
			var _this2 = this;

			jQuery.ajax({
				url: 'ajax/autocomplete',
				method: 'POST',
				data: { text: this.state.currentKeyword },
				crossDomain: true,
				success: function success(data) {
					console.log('data', data);
					_this2.setState({
						autoSuggestData: data.data
					});
				},
				error: function error(_error2) {
					console.warn(_error2);
				}
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			// Search to populate content on load
			this.search();

			// Get current location
			this.getCurrentLocation();
		}
	}]);

	return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(19);

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

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(19);

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
				{ className: "row home__business animated fadeIn" },
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

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(19);

var _react2 = _interopRequireDefault(_react);

var _configs = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
	_inherits(Pagination, _React$Component);

	function Pagination() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Pagination);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.setFirstPage = function () {
			_this.props.setCurrentPage(1);
		}, _this.setLastPage = function () {
			var totalResultFound = _this.props.totalResultFound;

			var numberOfPages = Math.ceil(totalResultFound / _configs.itemPerPage);
			_this.props.setCurrentPage(numberOfPages);
		}, _this.setPrevPage = function () {
			var currentPage = _this.props.currentPage;

			_this.props.setCurrentPage(currentPage - 1);
		}, _this.setNextPage = function () {
			var currentPage = _this.props.currentPage;

			_this.props.setCurrentPage(currentPage + 1);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Pagination, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    currentPage = _props.currentPage,
			    totalResultFound = _props.totalResultFound;

			var numberOfPages = Math.ceil(totalResultFound / _configs.itemPerPage);

			var prevPage = currentPage - 1 > 0 ? _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"a",
					{ href: "#" },
					currentPage - 1
				)
			) : null;

			var prev2Page = currentPage - 2 > 0 ? _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"a",
					{ href: "#" },
					currentPage - 2
				)
			) : null;

			var nextPage = currentPage + 1 <= numberOfPages ? _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"a",
					{ href: "#" },
					currentPage + 1
				)
			) : null;

			var next2Page = currentPage + 2 <= numberOfPages ? _react2.default.createElement(
				"li",
				null,
				_react2.default.createElement(
					"a",
					{ href: "#" },
					currentPage + 2
				)
			) : null;

			return _react2.default.createElement(
				"div",
				{ className: "text-center home__pagination" },
				_react2.default.createElement(
					"nav",
					{ "aria-label": "Page navigation" },
					_react2.default.createElement(
						"ul",
						{ className: "pagination" },
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ onClick: this.setFirstPage, href: "#", "aria-label": "Previous" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"First"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ onClick: this.setPrevPage, href: "#", "aria-label": "Previous" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"Prev"
								)
							)
						),
						prev2Page,
						prevPage,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ href: "#" },
								currentPage
							)
						),
						nextPage,
						next2Page,
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ onClick: this.setNextPage, href: "#", "aria-label": "Next" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"Next"
								)
							)
						),
						_react2.default.createElement(
							"li",
							null,
							_react2.default.createElement(
								"a",
								{ onClick: this.setLastPage, href: "#", "aria-label": "Next" },
								_react2.default.createElement(
									"span",
									{ "aria-hidden": "true" },
									"Last"
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

},[380])["default"];
//# sourceMappingURL=yelpBundle.js.map
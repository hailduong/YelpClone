window.yelpBundle=webpackJsonp_name_([0],{130:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaultLocation="San Fransisco",t.itemPerPage=10},357:function(e,t,a){e.exports=a(358)},358:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(31),s=n(c),i=a(129),f=n(i),d=a(359),p=n(d),m=a(360),h=n(m),y=a(361),g=n(y),b=a(362),v=n(b),E=a(363),_=n(E),w=function(e){function t(){var e,a,n,l;r(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return a=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={searchData:[],locationFromLastSearch:"",keywordFromLastSearch:"",currentPage:1,loading:!0},n.setSearchResultData=function(e){n.setState({searchData:e})},n.setAppLoadingState=function(e){n.setState({loading:e})},n.setDataLastSearch=function(e,t){n.setState({keywordFromLastSearch:e,locationFromLastSearch:t})},n.setCurrentPage=function(e){n.setState({currentPage:e})},l=a,o(n,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this,t={setSearchResultData:e.setSearchResultData,setDataLastSearch:e.setDataLastSearch,setAppLoadingState:e.setAppLoadingState},a=this.state.locationFromLastSearch,n=this.state.keywordFromLastSearch,r=this.state.searchData.businesses,o=this.state.searchData.total?this.state.searchData.total:0,l=this.state.loading,u=r?this.state.searchData.businesses.map(function(e){return s.default.createElement(g.default,{key:e.id,data:e})}):null,c=0===o?null:s.default.createElement(v.default,{currentPage:this.state.currentPage,setCurrentPage:this.setCurrentPage,totalResultFound:o}),i=n?s.default.createElement("span",null,"for ",s.default.createElement("strong",null,n," ")):"";return s.default.createElement("div",{className:"home"},s.default.createElement(h.default,null),s.default.createElement(p.default,{currentPage:this.state.currentPage,actions:t}),s.default.createElement("div",{className:"container home__search-result"},l?s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-md-12"},s.default.createElement(_.default,null))):s.default.createElement("div",null,s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-md-12"},s.default.createElement("h4",{className:"stats"},s.default.createElement("strong",null,o," "),"results found ",i,"from ",s.default.createElement("strong",null,a)))),s.default.createElement("div",{className:"row home__search-result"},u),c),s.default.createElement("hr",null),s.default.createElement("footer",{className:"m-b-md"},s.default.createElement("p",null,"© 2017 Yelp Clone, Inc."))))}}]),t}(s.default.Component);f.default.render(s.default.createElement(w,null),document.querySelector("#yelpClone"))},359:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(31),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=a(130),i=function(e){function t(){var e,a,o,l;n(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={currentKeyword:"",currentLocation:"",autoSuggestData:{},keywordFieldIsFocused:!1},o.handleKeywordChange=function(e){o.setState({currentKeyword:e.target.value})},o.handleKeywordBlur=function(e){o.keywordBlurTimeout&&clearTimeout(o.keywordBlurTimeout),o.keywordBlurTimeout=setTimeout(function(){o.setState({keywordFieldIsFocused:!1})},100)},o.handleKeywordFocus=function(e){o.setState({keywordFieldIsFocused:!0})},o.handleLocationChange=function(e){o.setState({currentLocation:e.target.value})},o.handleKeywordKeyUp=function(e){o.keywordKeyUpTimeout&&clearTimeout(o.keywordKeyUpTimeout),o.keywordKeyUpTimeout=setTimeout(function(){o.getAutoCompleteContent()},200)},o.getCurrentLocation=function(){var e=o;o.geoCoder||(o.geoCoder=new google.maps.Geocoder);var t=o.geoCoder;o.getCurrentLatLong().then(function(a){t.geocode({location:a},function(t,a){console.log("Location received:",t);var n=t[0].address_components.filter(function(e){return"administrative_area_level_1"===e.types[0]}),r=n[0].long_name;e.setState({currentLocation:r})})})},o.getCurrentLatLong=function(){if("geolocation"in navigator){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(function(t){console.log("Current location:",t.coords.latitude,t.coords.longitude),e({lng:t.coords.longitude,lat:t.coords.latitude})})})}console.log("Geolocation is not avabilable")},o.handleClickSearchBtn=function(){o.search(o.state.currentKeyword)},o.search=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o.props.actions.setAppLoadingState(!0);var a=o.props.currentPage;t||(t=a);var n=o.state.currentLocation;n||(n=s.defaultLocation),o.props.actions.setDataLastSearch(e,n);var r=(t-1)*s.itemPerPage,l={term:e,offset:r,limit:10,location:n};jQuery.ajax({url:"ajax/search",method:"POST",data:l,crossDomain:!0,success:function(e){console.log("Searched and received data."),200===e.statusCode?o.props.actions.setSearchResultData(e.data):(o.props.actions.setSearchResultData([]),console.warn("For a quick solution, I'll just mark it at not found, but we should handle errors here:",e)),o.props.actions.setAppLoadingState(!1)},error:function(e){console.warn(e)}})},l=a,r(o,l)}return o(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.props.currentPage!==e.currentPage&&this.search(this.state.currentKeyword,e.currentPage)}},{key:"render",value:function(){var e=this,t=this.state.keywordFieldIsFocused,a=function(t){var a=function(){e.setState({currentKeyword:t},e.search(t))};return c.default.createElement("li",{onClick:a,key:t},t)},n=!!this.state.autoSuggestData.terms,r=n?this.state.autoSuggestData.terms.map(function(e){return a(e.text)}):null,o=t&&n;return c.default.createElement("div",{className:"jumbotron home__search-bar"},c.default.createElement("div",{className:"container"},c.default.createElement("h3",null,"Search for the best places"),c.default.createElement("form",{className:"form-horizontal row"},c.default.createElement("div",{className:"col-md-6"},c.default.createElement("input",{type:"text",value:this.state.currentKeyword,onChange:this.handleKeywordChange,onKeyUp:this.handleKeywordKeyUp,onBlur:this.handleKeywordBlur,onFocus:this.handleKeywordFocus,className:"form-control",placeholder:"Keyword: e.g. Food, drinks, etc..."}),c.default.createElement("div",{className:"dropdown "+(o?"open":"")},c.default.createElement("ul",{className:"dropdown-menu animated fadeIn","aria-labelledby":"dLabel"},r))),c.default.createElement("div",{className:"col-md-4"},c.default.createElement("div",{className:"input-group"},c.default.createElement("input",{type:"text",className:"form-control",placeholder:"Location: e.g. San Fransisco",onChange:this.handleLocationChange,value:this.state.currentLocation}),c.default.createElement("span",{title:"Get your current location","data-toggle":"tooltip",className:"input-group-addon get-location",onClick:this.getCurrentLocation},c.default.createElement("span",{className:"glyphicon glyphicon-screenshot"})))),c.default.createElement("div",{className:"col-md-2"},c.default.createElement("button",{type:"button",onClick:this.handleClickSearchBtn,className:"btn btn-primary form-control"},"Search")))))}},{key:"getAutoCompleteContent",value:function(){var e=this;jQuery.ajax({url:"ajax/autocomplete",method:"POST",data:{text:this.state.currentKeyword},crossDomain:!0,success:function(t){200===t.statusCode&&e.setState({autoSuggestData:t.data})},error:function(e){console.warn(e)}})}},{key:"componentDidMount",value:function(){this.search(),this.getCurrentLocation(),$('[data-toggle="tooltip"]').tooltip({container:"body"})}}]),t}(c.default.Component);t.default=i},360:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(31),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("nav",{className:"home__navbar navbar navbar-fixed-top"},c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"navbar-header"},c.default.createElement("a",{className:"navbar-brand",href:"#"},c.default.createElement("i",{className:"glyphicon glyphicon-tower"})," Yelp Clone"))))}}]),t}(c.default.Component);t.default=s},361:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(31),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props.data,t=e.image_url,a=e.name,n=e.display_phone,r=e.location,o=e.categories,l=e.url,u=r.display_address.join(" "),s=o.map(function(e){return e.title}).join(" ,");return c.default.createElement("div",{className:"col-md-6 home__business animated fadeIn"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-3 logo"},c.default.createElement("span",{className:"logo-container",style:{backgroundImage:"url("+t+")"}})),c.default.createElement("div",{className:"col-md-9 info"},c.default.createElement("h2",{className:"name"},c.default.createElement("a",{href:l,target:"_blank"},a)),c.default.createElement("p",{className:"address"},u),c.default.createElement("p",{className:"phone"},n),c.default.createElement("p",null,"Category: ",s))))}}]),t}(c.default.Component);t.default=s},362:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(31),c=function(e){return e&&e.__esModule?e:{default:e}}(u),s=a(130),i=function(e){function t(){var e,a,o,l;n(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return a=o=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.setFirstPage=function(){o.props.setCurrentPage(1)},o.setLastPage=function(){var e=o.props.totalResultFound,t=Math.ceil(e/s.itemPerPage);o.props.setCurrentPage(t)},o.setPrevPage=function(){var e=o.props.currentPage;o.props.setCurrentPage(e-1)},o.setNextPage=function(){var e=o.props.currentPage;o.props.setCurrentPage(e+1)},l=a,r(o,l)}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.currentPage,a=e.totalResultFound;Math.ceil(a/s.itemPerPage);return c.default.createElement("div",{className:"text-center home__pagination"},c.default.createElement("nav",{"aria-label":"Page navigation"},c.default.createElement("ul",{className:"pagination"},c.default.createElement("li",null,c.default.createElement("a",{onClick:this.setFirstPage,href:"#","aria-label":"Previous"},c.default.createElement("span",{"aria-hidden":"true"},"First"))),c.default.createElement("li",null,c.default.createElement("a",{onClick:this.setPrevPage,href:"#","aria-label":"Previous"},c.default.createElement("span",{"aria-hidden":"true"},"Prev"))),c.default.createElement("li",{className:"active"},c.default.createElement("a",{href:"#"},"Page: ",t)),c.default.createElement("li",null,c.default.createElement("a",{onClick:this.setNextPage,href:"#","aria-label":"Next"},c.default.createElement("span",{"aria-hidden":"true"},"Next"))),c.default.createElement("li",null,c.default.createElement("a",{onClick:this.setLastPage,href:"#","aria-label":"Next"},c.default.createElement("span",{"aria-hidden":"true"},"Last"))))))}}]),t}(c.default.Component);t.default=i},363:function(e,t,a){"use strict";function n(){return o.default.createElement("div",{className:"page-loading text-center"},o.default.createElement("div",{className:"spinner"},o.default.createElement("div",{className:"cube1"}),o.default.createElement("div",{className:"cube2"})))}Object.defineProperty(t,"__esModule",{value:!0});var r=a(31),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=n}},[357]).default;
//# sourceMappingURL=yelpBundle.js.map
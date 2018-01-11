import React from "react";
import {defaultLocation, itemPerPage} from "./misc/configs";

export default class SearchBar extends React.Component {

	state = {
		currentKeyword: '',
		currentLocation: '',
		currentPage: 1,
		autoSuggestData: {},
		keywordFieldIsFocused: false
	};

	componentWillReceiveProps(nextProps) {
		if (this.props.currentPage !== nextProps.currentPage) {
			this.search(this.state.currentKeyword, nextProps.currentPage)
		}
	}

	handleKeywordChange = (event) => {
		this.setState({
			currentKeyword: event.target.value
		})
	};

	handleKeywordBlur = (event) => {
		if (!!this.keywordBlurTimeout) clearTimeout(this.keywordBlurTimeout);

		this.keywordBlurTimeout = setTimeout(() => {
			this.setState({
				keywordFieldIsFocused: false
			})
		}, 100)
	};

	handleKeywordFocus = (event) => {
		this.setState({
			keywordFieldIsFocused: true
		})
	};

	handleLocationChange = (event) => {
		this.setState({
			currentLocation: event.target.value
		})
	};

	handleKeywordKeyUp = (event) => {
		if (!!this.keywordKeyUpTimeout) clearTimeout(this.keywordKeyUpTimeout);
		this.keywordKeyUpTimeout = setTimeout(() => {
			this.getAutoCompleteContent()
		}, 200);
	};


	getCurrentLocation = () => {
		const self = this;
		// Init geoCoder
		if (!this.geoCoder) this.geoCoder = new google.maps.Geocoder;
		const geoCoder = this.geoCoder;
		const latLongPromise = this.getCurrentLatLong();

		latLongPromise.then((latLng) => {
			geoCoder.geocode({'location': latLng}, function(results, status) {
				console.log('Location received:', results);
				const currentCityComponent = results[0].address_components.filter(item => {
					return item.types[0] === "administrative_area_level_1"
				});
				const cityName = currentCityComponent[0].long_name;
				self.setState({
					currentLocation: cityName
				})
			})
		});
	};

	getCurrentLatLong = () => {
		if ("geolocation" in navigator) {

			const latLongPromise = new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(function(position) {
					console.log('Current location:', position.coords.latitude, position.coords.longitude);
					resolve({
						lng: position.coords.longitude,
						lat: position.coords.latitude
					});
				});
			});

			return latLongPromise;
		} else {
			console.log('Geolocation is not avabilable')
		}
	};

	render() {

		const self = this;

		const {keywordFieldIsFocused} = this.state;

		const autoSuggestionItemTemplate = (text) => {

			const setKeyword = () => {
				self.setState({
					currentKeyword: text
				}, self.search(text));
			};

			return (<li onClick={setKeyword} key={text}>{text}</li>);
		};

		const thereAreTerms = !!this.state.autoSuggestData.terms;
		const dropdownItems = thereAreTerms
			? this.state.autoSuggestData.terms.map((term) => {
				return autoSuggestionItemTemplate(term.text);
			})
			: null;

		const dropDownShouldBeOpen = keywordFieldIsFocused && thereAreTerms;

		return (
			<div className="jumbotron home__search-bar">
				<div className="container">
					<h3>Search for the best places</h3>
					<form className="form-horizontal row">
						<div className="col-md-5">
							<input type="text" value={this.state.currentKeyword}
								   onChange={this.handleKeywordChange}
								   onKeyUp={this.handleKeywordKeyUp}
								   onBlur={this.handleKeywordBlur}
								   onFocus={this.handleKeywordFocus}
								   className="form-control" placeholder="Keyword: e.g. Food, drinks, etc..."/>
							<div className={`dropdown ${dropDownShouldBeOpen ? "open" : ""}`}>
								<ul className="dropdown-menu animated fadeIn" aria-labelledby="dLabel">
									{dropdownItems}
								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="input-group">
								<input type="text" className="form-control"
									   placeholder="Location: e.g. San Fransisco"
									   onChange={this.handleLocationChange}
									   value={this.state.currentLocation}
								/>
								<span className="input-group-addon get-location" onClick={this.getCurrentLocation}>
									<span title="Get your current location" className="glyphicon glyphicon-screenshot"></span>
								</span>
							</div>
						</div>
						<div className="col-md-2">
							<button type="button" onClick={this.handleClickSearchBtn} className="btn btn-primary form-control">Search
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

	handleClickSearchBtn = () => {
		this.search(this.state.currentKeyword);
	};

	search = (keyword = "", page) => {

		let {currentPage} = this.state;

		if (!page) page = currentPage;
		let {currentLocation} = this.state;
		if (!currentLocation) currentLocation = defaultLocation; // There will be results from this location
		this.props.actions.setDataLastSearch(keyword, currentLocation);

		const offset = (page - 1) * itemPerPage;

		const postObject = {
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
			success: (data) => {
				console.log('Searched and received data.');
				this.props.actions.setSearchResultData(data.data);
			},
			error: (error) => {
				console.warn(error)
			}
		})
	};

	getAutoCompleteContent() {
		jQuery.ajax({
			url: 'ajax/autocomplete',
			method: 'POST',
			data: {text: this.state.currentKeyword},
			crossDomain: true,
			success: (data) => {
				console.log('data', data);
				this.setState({
					autoSuggestData: data.data
				})
			},
			error: (error) => {
				console.warn(error)
			}
		})

	}

	componentDidMount() {
		// Search to populate content on load
		this.search();

		// Get current location
		this.getCurrentLocation();
	}

}
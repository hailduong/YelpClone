import React from "react";
import {defaultLocation, itemPerPage} from "./misc/configs";
import {connect} from "react-redux";
import * as Actions from "./misc/actions";

class SearchBar extends React.Component {

	state = {
		currentKeyword: '',
		currentLocation: '',
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

		const thereAreTerms = !!this.props.autoSuggestData.terms;
		
		const dropdownItems = thereAreTerms
			? this.props.autoSuggestData.terms.map((term) => {
				return autoSuggestionItemTemplate(term.text);
			})
			: null;
		
		
		const dropDownShouldBeOpen = keywordFieldIsFocused && thereAreTerms;

		return (
			<div className="jumbotron home__search-bar">
				<div className="container">
					<h3>Search for the best places</h3>
					<form className="form-horizontal row">
						<div className="col-md-6">
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
						<div className="col-md-4">
							<div className="input-group">
								<input type="text" className="form-control"
									   placeholder="Location: e.g. San Fransisco"
									   onChange={this.handleLocationChange}
									   value={this.state.currentLocation}
								/>
								<span title="Get your current location" data-toggle="tooltip"
									  className="input-group-addon get-location" onClick={this.getCurrentLocation}>
									<span className="glyphicon glyphicon-screenshot"></span>
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

		//this.props.actions.setAppLoadingState(true);

		let {currentPage} = this.props;

		if (!page) page = currentPage;
		let {currentLocation} = this.state;
		if (!currentLocation) currentLocation = defaultLocation; // There will be results from this location
		//this.props.actions.setDataLastSearch(keyword, currentLocation);
		const limit = 10;
		let offset = (page - 1) * itemPerPage;
		if ((offset + offset) >= 1000) offset = 1000 - limit;

		const postObject = {
			term: keyword,
			offset: offset,
			limit: 10,
			location: currentLocation
		};


		this.props.search(postObject)
	};

	getAutoCompleteContent() {
		const currentKeyword = this.state.currentKeyword;
		this.props.getAutoCompleteContent(currentKeyword)
	}

	componentDidMount() {
		// Search to populate content on load
		this.search();

		// Init tooltip
		$('[data-toggle="tooltip"]').tooltip({
			container: 'body'
		});
	}

}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage,
	autoSuggestData: state.autoSuggestData
});

const mapDispatchToProps = (dispatch) => ({
	search: (postObject) => {
		dispatch(Actions.search(postObject))
	},
	getAutoCompleteContent: (keyword) => {
		dispatch(Actions.autoComplete(keyword));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
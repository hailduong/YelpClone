import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import BusinessItem from "./BusinessItem";
import Pagination from "./Pagination";

class App extends React.Component {
	state = {
		searchData: [],
		locationFromLastSearch: "",
		keywordFromLastSearch: "",
		currentPage: 0
	};

	setSearchResultData = (data) => {
		this.setState({
			searchData: data
		})
	};

	setDataLastSearch = (keyword, location) => {
		this.setState({
			keywordFromLastSearch: keyword,
			locationFromLastSearch: location
		})
	};

	setCurrentPage = (pageNumber) => {
		this.setState({
			currentPage: pageNumber
		})
	};

	render() {

		const self = this;

		const actions = {
			setSearchResultData: self.setSearchResultData,
			setDataLastSearch: self.setDataLastSearch
		};

		const locationFromLastSearch = this.state.locationFromLastSearch;
		const keywordFromLastSearch = this.state.keywordFromLastSearch;
		const businessData = this.state.searchData.businesses;
		const totalResultFound = this.state.searchData.total;

		const searchResultNodes = !!businessData
			? this.state.searchData.businesses.map((item) => {
				return <BusinessItem key={item.id} data={item}/>
			})
			: null;

		return (
			<div className="home">
				<Navbar/>
				<SearchBar actions={actions}/>
				<div className="container">
					<div className="row"></div>
					<div className="col-md-12">
						<h4><strong>{totalResultFound}</strong> results found for {keywordFromLastSearch} from {locationFromLastSearch}
						</h4>
					</div>
					<div className="row">
						<div className="col-md-8 home__search-result">
							{searchResultNodes}
						</div>
						<div className="col-md-4 home__sidebar">
							This is a side bar
						</div>
					</div>
					<Pagination currentPage={this.state.currentPage}
								setCurrentPage={this.setCurrentPage}
								totalResultFound={totalResultFound}
					/>
					<hr/>
					<footer>
						<p>&copy; 2016 Company, Inc.</p>
					</footer>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#yelpClone'));
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import BusinessItem from "./BusinessItem";
import Pagination from "./Pagination";
import Loading from "./Loading";

class App extends React.Component {
	state = {
		searchData: [],
		locationFromLastSearch: "",
		keywordFromLastSearch: "",
		currentPage: 1,
		loading: true
	};

	setSearchResultData = (data) => {
		this.setState({
			searchData: data
		})
	};

	setAppLoadingState = (booleanValue) => {
		this.setState({
			loading: booleanValue
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
			setDataLastSearch: self.setDataLastSearch,
			setAppLoadingState: self.setAppLoadingState
		};

		const locationFromLastSearch = this.state.locationFromLastSearch;
		const keywordFromLastSearch = this.state.keywordFromLastSearch;
		const businessData = this.state.searchData.businesses;
		const totalResultFound = !!this.state.searchData.total ? this.state.searchData.total : 0;
		const loading = this.state.loading;


		const searchResultNodes = !!businessData
			? this.state.searchData.businesses.map((item) => {
				return <BusinessItem key={item.id} data={item}/>
			})
			: null;

		const paginationNode = totalResultFound === 0
			? null
			: (<Pagination currentPage={this.state.currentPage}
						   setCurrentPage={this.setCurrentPage}
						   totalResultFound={totalResultFound}
			/>);

		const forKeywordText = !!keywordFromLastSearch ? <span>for <strong>{keywordFromLastSearch}&nbsp;</strong></span> : "";

		return (
			<div className="home">
				<Navbar/>
				<SearchBar currentPage={this.state.currentPage} actions={actions}/>
				<div className="container home__search-result">
					{loading
						? (<div className="row">
							<div className="col-md-12">
								<Loading/>
							</div>
						</div>)
						: (<div>
								<div className="row">
									<div className="col-md-12">
										<h4 className="stats"><strong>{totalResultFound}&nbsp;</strong>
											results found {forKeywordText}
											from <strong>{locationFromLastSearch}</strong>
										</h4>
									</div>
								</div>
								<div className="row home__search-result">
									{searchResultNodes}
								</div>
								{paginationNode}
							</div>
					 )}
					<hr/>
					<footer className="m-b-md">
						<p>&copy; 2017 Yelp Clone, Inc.</p>
					</footer>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#yelpClone'));
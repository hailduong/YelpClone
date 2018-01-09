import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import BusinessItem from "./BusinessItem";
import Pagination from "./Pagination";

class App extends React.Component {
	state = {
		searchData: []
	};

	setSearchResultData = (data) => {
		this.setState({
			searchData: data
		})
	};

	render() {

		const self = this;

		const actions = {
			setSearchResultData: self.setSearchResultData
		};


		const state = this.state;
		const businessData = this.state.searchData.businesses;

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
					<div className="row">
						<div className="col-md-8 home__search-result">
							{searchResultNodes}
						</div>
						<div className="col-md-4 home__sidebar">
							This is a side bar
						</div>
					</div>
					<Pagination/>
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
import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import BusinessItem from "./BusinessItem";
import Pagination from "./Pagination";
import Loading from "./Loading";
import {connect} from "react-redux";


class Home extends React.Component {

	state = {
		loading: true
	};

	componentWillReceiveProps(nextProps) {
		const thereIsResult = !!nextProps.searchData.businesses && nextProps.searchData.businesses.length > 0;
		const isLoading = this.state.loading === true;
		if (thereIsResult && isLoading) {
			this.setState({loading: false})
		}
	}

	render() {

		const locationFromLastSearch = this.props.locationFromLastSearch;
		const keywordFromLastSearch = this.props.keywordFromLastSearch;
		const businessData = this.props.searchData.businesses;
		const totalResultFound = !!this.props.searchData.total ? this.props.searchData.total : 0;
		const loading = this.state.loading;

		const searchResultNodes = !!businessData
			? this.props.searchData.businesses.map((item) => {
				return <BusinessItem key={item.id} data={item}/>
			})
			: null;

		const paginationNode = totalResultFound === 0
			? null
			: (<Pagination totalResultFound={totalResultFound}
			/>);

		const forKeywordText = !!keywordFromLastSearch ? <span>for <strong>{keywordFromLastSearch}&nbsp;</strong></span> : "";

		return (
			<div className="home">
				<Navbar/>
				<SearchBar/>
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


const mapStateToProps = (state) => ({
	searchData: state.searchData,
	locationFromLastSearch: state.locationFromLastSearch,
	keywordFromLastSearch: state.keywordFromLastSearch
});

export default connect(mapStateToProps)(Home);
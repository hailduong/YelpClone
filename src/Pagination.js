import React from "react";
import {itemPerPage} from "./misc/configs";
import {connect} from "react-redux";
import * as Actions from "./misc/actions";

class Pagination extends React.Component {

	setFirstPage = () => {
		this.props.setCurrentPage(1);
	};

	setLastPage = () => {
		const {totalResultFound} = this.props;
		const maxNumberOfPage = 1000 / itemPerPage;
		let numberOfPages = Math.ceil(totalResultFound / itemPerPage);
		if (numberOfPages >= numberOfPages) {
			numberOfPages = maxNumberOfPage;
		}
		this.props.setCurrentPage(numberOfPages);
	};

	setPrevPage = () => {
		const {currentPage} = this.props;
		let prevPage = currentPage - 1;
		if (prevPage < 1) prevPage = 1;
		this.props.setCurrentPage(prevPage);
	};

	setNextPage = () => {
		const maxNumberOfPage = 1000 / itemPerPage;
		const {currentPage} = this.props;
		let nextPage = currentPage + 1;
		if (nextPage > maxNumberOfPage) {
			nextPage = maxNumberOfPage;
		}
		this.props.setCurrentPage(currentPage + 1);
	};

	render() {

		const {currentPage} = this.props;
		const maxNumberOfPage = 1000 / itemPerPage; // Since the number of results is max. 1000
		const isLastPage = currentPage === maxNumberOfPage;
		const isFirstPage = currentPage === 1;
		return (
			<div className="text-center home__pagination">
				<nav aria-label="Page navigation">
					<ul className="pagination">
						<li className={isFirstPage ? "disabled" : ""}>
							<a onClick={this.setFirstPage} href="#" aria-label="Previous">
								<span aria-hidden="true">First</span>
							</a>
						</li>
						<li className={isFirstPage ? "disabled" : ""}>
							<a onClick={this.setPrevPage} href="#" aria-label="Previous">
								<span aria-hidden="true">Prev</span>
							</a>
						</li>
						<li className="active"><a href="#">Page: {currentPage}</a></li>
						<li className={isLastPage ? "disabled" : ""}>
							<a onClick={this.setNextPage} href="#" aria-label="Next">
								<span aria-hidden="true">Next</span>
							</a>
						</li>
						<li className={isLastPage ? "disabled" : ""}>
							<a onClick={this.setLastPage} href="#" aria-label="Next">
								<span aria-hidden="true">Last</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	currentPage: state.currentPage
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentPage: (pageNumber) => {
		dispatch(Actions.setPage(pageNumber))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
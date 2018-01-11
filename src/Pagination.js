import React from "react";
import {itemPerPage} from "./misc/configs";

export default class Pagination extends React.Component {

	setFirstPage = () => {
		this.props.setCurrentPage(1);
	};

	setLastPage = () => {
		const {totalResultFound} = this.props;
		const numberOfPages = Math.ceil(totalResultFound / itemPerPage);
		this.props.setCurrentPage(numberOfPages);
	};

	setPrevPage = () => {
		const {currentPage} = this.props;
		this.props.setCurrentPage(currentPage - 1);
	};

	setNextPage = () => {
		const {currentPage} = this.props;
		this.props.setCurrentPage(currentPage + 1);
	};

	render() {

		const {currentPage, totalResultFound} = this.props;
		const numberOfPages = Math.ceil(totalResultFound / itemPerPage);
		

		return (
			<div className="text-center home__pagination">
				<nav aria-label="Page navigation">
					<ul className="pagination">
						<li>
							<a onClick={this.setFirstPage} href="#" aria-label="Previous">
								<span aria-hidden="true">First</span>
							</a>
						</li>
						<li>
							<a onClick={this.setPrevPage} href="#" aria-label="Previous">
								<span aria-hidden="true">Prev</span>
							</a>
						</li>
						<li className="active"><a href="#">Page: {currentPage}</a></li>
						<li>
							<a onClick={this.setNextPage} href="#" aria-label="Next">
								<span aria-hidden="true">Next</span>
							</a>
						</li>
						<li>
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
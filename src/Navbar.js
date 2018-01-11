import React from "react";

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="home__navbar navbar navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#"><i className="glyphicon glyphicon-tower"></i> Yelp Clone</a>
					</div>
				</div>
			</nav>
		)
	}
}
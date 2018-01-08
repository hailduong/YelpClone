import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
									aria-expanded="false"
									aria-controls="navbar">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#">Yelp Clone</a>
						</div>
						<div id="navbar" className="navbar-collapse collapse">
							<form className="navbar-form navbar-right">
								<div className="form-group">
									<input type="text" placeholder="Email" className="form-control"/>
								</div>
								<div className="form-group">
									<input type="password" placeholder="Password" className="form-control"/>
								</div>
								<button type="submit" className="btn btn-success">Sign in</button>
							</form>
						</div>
					</div>
				</nav>
				<SearchBar/>
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
							   condimentum
							   nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
							   odio dui.
							</p>
							<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
						</div>
						<div className="col-md-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
							   condimentum
							   nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed
							   odio dui.
							</p>
							<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
						</div>
						<div className="col-md-4">
							<h2>Heading</h2>
							<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula
							   porta felis
							   euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
							   massa justo sit
							   amet risus.
							</p>
							<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
						</div>
					</div>
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
import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar/>
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
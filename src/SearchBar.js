import React from "react";

export default class SearchBar extends React.Component {

	state = {
		currentKeyword: ''
	};

	handleKeywordChange = (event) => {
		console.log(event.target.value);
		this.setState({
			currentKeyword: event.target.value
		})
	};

	handleKeywordKeyUp = (event) => {
		if (!!this.keywordKeyUpTimeout) clearTimeout(this.keywordKeyUpTimeout);
		this.keywordKeyUpTimeout = setTimeout(() => {
			this.getAutoCompleteContent()
		}, 200);
	};


	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<h3>Search for the best places</h3>
					<form className="form-horizontal row">
						<div className="col-md-5">
							<input type="text" value={this.state.currentKeyword}
								   onChange={this.handleKeywordChange}
								   onKeyUp={this.handleKeywordKeyUp}
								   className="form-control" placeholder="Find"/>
						</div>
						<div className="col-md-5">
							<input type="text" className="form-control" placeholder="Near"/>
						</div>
						<div className="col-md-2">
							<button type="button" onClick={this.handleSearch} className="btn btn-primary form-control">Search
							</button>
						</div>
					</form>
				</div>
			</div>
		)
	}

	handleSearch = () => {
		jQuery.ajax({
			url: 'ajax/search',
			method: 'POST',
			data: {
				term: this.state.currentKeyword,
				longitude: -122.399972,
				latitude: 37.786882,
				offset: 10
			},
			crossDomain: true,
			success: (data) => {
				console.log('data', data)
			},
			error: (error) => {
				console.warn(error)
			}
		})
	};

	getAutoCompleteContent() {
		jQuery.ajax({
			url: 'ajax/autocomplete',
			method: 'POST',
			data: {text: this.state.currentKeyword},
			crossDomain: true,
			success: (data) => {
				console.log('data', data)
			},
			error: (error) => {
				console.warn(error)
			}
		})

	}
}
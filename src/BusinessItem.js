import React from "react";

export default class BusinessItem extends React.Component {
	render() {

		const {image_url, name, display_phone, location, categories, url} = this.props.data;
		const address = location.display_address.join(" ");
		const displayCategory = categories.map((item) => item.title).join(" ,");
		return (
			<div className="col-md-6 home__business animated fadeIn">
				<div className="row">
					<div className="col-md-3 logo">
						<span className="logo-container" style={{backgroundImage: `url(${image_url})`}}/>
					</div>
					<div className="col-md-9 info">
						<h2 className="name"><a href={url} target="_blank">{name}</a></h2>
						<p className="address">{address}</p>
						<p className="phone">{display_phone}</p>
						<p>Category: {displayCategory}</p>
					</div>
				</div>
			</div>
		)
	}
}
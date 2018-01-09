import React from "react";

export default class BusinessItem extends React.Component {
	render() {

		const {image_url, name, display_phone, location, categories} = this.props.data;
		const address = location.display_address.join(" ");
		const displayCategory = categories.map((item) => item.title).join(" ,");
		return (
			<div className="row home__business">
				<div className="col-md-3 logo">
					<img className="img-responsive" src={image_url} alt={name}/>
				</div>
				<div className="col-md-9 info">
					<h2 className="name">{name}</h2>
					<p className="address">{address}</p>
					<p className="phone">{display_phone}</p>
					<p>Category: {displayCategory}</p>
				</div>
			</div>
		)
	}
}
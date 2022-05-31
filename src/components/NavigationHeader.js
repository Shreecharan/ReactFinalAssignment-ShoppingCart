import React from "react";
import { Link } from "react-router-dom";

export const NavigationHeader = () => {
	const style = {
		paddingLeft: "20px",
		textDecoration: "none",
	};
	return (
		<div className="nav">
			<ul
				className="nav-link"
				style={{
					display: "flex",
					backgroundColor: "grey",
					width: "100%",
					listStyleType: "none",
					justifyContent: "center",
				}}
			>
				<li style={style}>
					<Link to="/categories" className="nav-links">
						categories
					</Link>
				</li>
				<li style={style}>
					<Link to="/cart" className="nav-links">
						cart
					</Link>
				</li>
				<li style={style}>
					<Link to="/" className="nav-links">
						profile
					</Link>
				</li>
			</ul>
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CategoryComponent() {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((json) => setCategories(json))
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<div>
				{categories &&
					categories.slice(0, 10).map((category, index) => (
						<h5>
							<Link to={`/product/${category}`}>{category}</Link>
						</h5>
					))}
			</div>
		</div>
	);
}

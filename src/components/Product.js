import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Product.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../actions";

export default function ProductComponent() {
	const { category } = useParams();
	const [products, setProducts] = useState([]);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		axios
			.get(`https://fakestoreapi.com/products/category/${category}`)
			.then((res) => {
				setProducts(res.data);
			});
	};
	const handleAddToCart = (e) => {
		e.preventDefault();
		const product = products.filter(
			(product) => product.id === Number(e.target.value)
		);
		dispatch(addToCart(product[0]));
	};
	return (
		<div className="product">
			<h1>{category.toUpperCase()}</h1>
			<Link to="/cart">Go to Cart</Link>
			<Row>
				{products &&
					products.map((product) => (
						<Col xs="6">
							<Card key={product.id} className="productCard">
								<Card.Header>{product.title}</Card.Header>

								<Card.Body>
									<img
										style={{ width: "200px", height: "200px" }}
										src={product.image}
										alt=""
									/>
									<br />
									<div className="productInfo">
										<div className="pinfolabel">
											<b>Price:</b>
											{product.price} Rs
										</div>
										<div className="pinfolabel">
											<b>Rating:</b> {product.rating.rate}
										</div>
									</div>

									<br />
									{product.description}
									<br />
									<div className="productInfo">
										<div className="pinfolabel">
											<b>In Stock:</b> {product.rating.count}
										</div>
									</div>
								</Card.Body>
								<Card.Footer>
									<Button onClick={handleAddToCart} value={product.id}>
										Add to Cart
									</Button>
								</Card.Footer>
							</Card>
						</Col>
					))}
			</Row>
		</div>
	);
}

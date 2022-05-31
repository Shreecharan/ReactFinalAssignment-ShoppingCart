import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, removeFromCart } from "../actions";

export default function Cart() {
	//  console.log(items)
	let CartItems = useSelector((state) => state.cart);
	let TotalCart = Cart.numberCart;
	const dispatch = useDispatch();

	function TotalPrice(price, quantity) {
		return Number(price * quantity);
	}

	return (
		<div className="row">
			<div className="col-md-12">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Image</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total Price</th>
						</tr>
					</thead>
					<tbody>
						{CartItems.Carts.map((item, key) => {
							return (
								<tr key={item.id}>
									<td>
										<button
											className="badge badge-danger"
											onClick={() => dispatch(removeFromCart(item.id))}
										>
											X
										</button>
									</td>
									<td>{}</td>
									<td>
										<img
											src={item.image}
											style={{ width: "100px", height: "80px" }}
										/>
									</td>
									<td>{item.price} RS</td>
									<td>
										<span
											className="btn btn-primary"
											style={{ margin: "2px" }}
											onClick={() => dispatch(DecreaseQuantity(item.id))}
										>
											-
										</span>
										<span className="btn btn-info">{item.quantity}</span>
										<span
											className="btn btn-primary"
											style={{ margin: "2px" }}
											onClick={() => dispatch(IncreaseQuantity(item.id))}
										>
											+
										</span>
									</td>
									<td>{TotalPrice(item.price, item.quantity)} $</td>
								</tr>
							);
						})}
						<tr>
							<td colSpan="5">Total Carts</td>
							<td>{Number(TotalCart)} Rs</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

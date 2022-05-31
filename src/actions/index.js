export const addToCart = (product) => {
	return {
		type: "ADD",
		payload: product,
	};
};
export const removeFromCart = (id) => {
	return {
		type: "REMOVE",
		payload: id,
	};
};
export function IncreaseQuantity(id) {
	return {
		type: "INCREASE_QUANTITY",
		payload: id,
	};
}
export function DecreaseQuantity(id) {
	return {
		type: "DECREASE_QUANTITY",
		payload: id,
	};
}

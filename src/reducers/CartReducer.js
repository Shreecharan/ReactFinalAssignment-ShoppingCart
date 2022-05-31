const initProduct = {
	numberCart: 0,
	Carts: [],
	_products: [],
};
const CartReducer = (state = initProduct, action) => {
	switch (action.type) {
		case "ADD":
			let item = {
				id: action.payload.id,
				price: action.payload.price,
				image: action.payload.image,
				title: action.payload.title,
				quantity: 1,
			};
			return {
				...state,
				Carts: [...state.Carts, item],
				numberCart: state.numberCart + 1,
			};

		case "REMOVE":
			debugger;
			let quantity_ = state.Carts.filter(
				(item) => item.id === action.payload
			)[0].quantity;
			let itemToRemove = state.Carts.find((item) => action.payload === item.id);
			let new_items = state.Carts.filter((item) => action.payload !== item.id);
			return {
				...state,
				numberCart: state.numberCart - quantity_,
				Carts: new_items,
			};
		case "INCREASE_QUANTITY":
			state.numberCart++;
			state.Carts.map((item) => {
				if (item.id === action.payload) {
					return { ...item, quantity: item.quantity++ };
				}
			});
			return {
				...state,
			};
		case "DECREASE_QUANTITY":
			let quantity = state.Carts.filter((item) => item.id === action.payload)[0]
				.quantity;
			if (quantity > 1) {
				state.numberCart--;
				state.Carts.map((item) => {
					if (item.id === action.payload) {
						return { ...item, quantity: item.quantity-- };
					}
				});
			}
			return {
				...state,
			};

		default:
			return state;
	}
};
export default CartReducer;

const initialState = {
	items: {},
	totalCount: 0,
	totalPrice: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
	const [firstKey, ...keys] = path.split('.');

	return keys.reduce((val, key) => {
		return val[key]
	}, obj[firstKey])
}

const getTotal = (obj, propKey) => {
	return Object.values(obj).reduce((sum, obj) => {
		const value = _get(obj, propKey);

		return sum + value
	}, 0)
}

const cart = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PIZZA_TO_CART': {
			const currentPizzaItems =
				!state.items[action.payload.id] ?
					[action.payload]
					:
					[...state.items[action.payload.id].items, action.payload];

			const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					pizzasPrice: getTotalPrice(currentPizzaItems),
					pizzasCount: currentPizzaItems.length
				}
			}

			// const	items = Object.values(newItems).map(obj => obj.items),
			// 		allPizzas = [].concat.apply([], items),
			// 		totalPrice = getTotalPrice(allPizzas);

			const totalCount = getTotal(newItems, 'pizzasCount')
			const totalPrice = getTotal(newItems, 'pizzasPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice
			}
		}
		case 'INCREASE_CART_ITEM': {

			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0]
			];

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					pizzasPrice: getTotalPrice(newObjItems),
					pizzasCount: newObjItems.length
				}
			}


			const totalCount = getTotal(newItems, 'items.length')
			const totalPrice = getTotal(newItems, 'pizzasPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice
			}
		}
		case 'DECREASE_CART_ITEM': {

			const	oldItems = state.items[action.payload].items,
					newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					pizzasPrice: getTotalPrice(newObjItems),
					pizzasCount: newObjItems.length
				}
			}

			const totalCount = getTotal(newItems, 'items.length')
			const totalPrice = getTotal(newItems, 'pizzasPrice')

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice
			}

		}
		case 'REMOVE_CART_ITEM': {
			const	newItems = JSON.parse(JSON.stringify(state.items)),
					currentTotal = newItems[action.payload];

			delete newItems[action.payload]

			return {
				...state,
				items: newItems,
				totalCount: state.totalCount - currentTotal.pizzasCount,
				totalPrice: state.totalPrice - currentTotal.pizzasPrice
			}
		}
		case 'CLEAR_CART':
			return {
				...state,
				...initialState
			}
		default: return state;
	}
}

export default cart;
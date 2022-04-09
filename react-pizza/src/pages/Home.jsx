import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';


/* Components */
import { Category, PizzaList } from '../components';
import Sort from './../components/Sort/Sort';


const	catItems = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
		filter = [
			{ name: 'популярности', type: 'popular', order: 'desc' },
			{ name: 'цене', type: 'price', order: 'desc' },
			{ name: 'алфавиту', type: 'name', order: 'asc' },
		];

const Home = () => {
	const	dispatch = useDispatch(),
			{ items, isLoaded } = useSelector(({ pizzas }) => pizzas),
			{ category, sortBy } = useSelector(({ filters }) => filters),
			cartItems = useSelector(({ cart }) => cart.items);

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category, sortBy]);

	const onSelectCategory = useCallback((index) => {
		dispatch(setCategory(index))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSelectSort = useCallback((type) => {
		dispatch(setSortBy(type))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onClickAddPizza = (obj) => {
		dispatch(addPizzaToCart(obj))
	};

	return (
		<>
			<div className="category">
				<Category
					activeCatIndex={category}
					items={catItems}
					onClickCategory={onSelectCategory}
				/>
				<Sort
					activeSortType={sortBy.type}
					onClickSortType={onSelectSort}
					items={filter}
				/>
			</div>
			<PizzaList
				pizzas={items}
				isLoaded={isLoaded}
				onClickAddPizza={onClickAddPizza}
				addedCount={cartItems}
			/>
		</>
	);
};

export default Home;
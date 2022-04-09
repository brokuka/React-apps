import React from 'react';

/* Components */
import PizzaListItem from '../PizzaListItem';
import LoadingBlock from '../PizzaListItem/LoadingBlock'

/* Style */
import "./PizzaList.scss";


const PizzaList = ({ pizzas, isLoaded, onClickAddPizza, addedCount }) => {
	return (
		<div className="pizza-list">
			<h1 className="pizza-list__title">Все пиццы</h1>
			<div className="row jcc">
				{
					isLoaded ?
						pizzas.map((obj) => (
							<PizzaListItem
								key={obj.id}
								onClickAddPizza={(obj) => onClickAddPizza(obj)}
								addedCount={addedCount[obj.id] && addedCount[obj.id].items.length}
								{...obj}
							/>
						))
						:
						[...Array(4)].map((_, i) => <LoadingBlock key={i} />)
				}
			</div>
		</div>
	);
};

export default PizzaList;

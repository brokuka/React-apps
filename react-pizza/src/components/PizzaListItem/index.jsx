import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/* Components */
import { Icon, Button } from '../index';


/* Style */
import "./PizzaListItem.scss";


const PizzaListItem = ({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) => {
	const availableTypes = ['тонкое', 'традиционное'],
		availableSizes = [26, 30, 40];

	const [activeType, setActiveType] = useState(types[0]),
		[activeSize, setActiveSize] = useState(sizes[0]);

	const onSelectType = (index) => setActiveType(index),
		onSelectSize = (size) => setActiveSize(size);

	const onAddPizza = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price,
			type: availableTypes[activeType],
			size: activeSize
		}

		onClickAddPizza(obj);
	}

	return (
		<div className="col-3 col-ds-4 col-tb-6 col-mb-12 col-930-6 col-630-12">
			<div className="pizza-list__item">
				<div className="pizza-item__header">
					<img className="img" src={imageUrl} alt="Pizza" width={260} height={260} />
				</div>
				<div className="pizza-item__content">
					<h3 className="pizza-item__title">{name}</h3>
					<div className="list-group">
						<ul className="pizza-texture-list">
							{
								availableTypes.map((type, index) => (
									<li
										key={index}
										onClick={() => onSelectType(index)}
										className={classNames({
											active: activeType === index,
											disabled: !types.includes(index),
										})}
									>
										{type}
									</li>
								))
							}
						</ul>
						<ul className="pizza-size-list">
							{
								availableSizes.map((size, index) => (
									<li
										key={index}
										onClick={() => onSelectSize(size)}
										className={classNames({
											active: activeSize === size,
											disabled: !sizes.includes(size)
										})}
									>
										{size}
									</li>
								))
							}
						</ul>
					</div>
				</div>
				<div className="pizza-item__footer">
					<span className="pizza-item__price">{price}</span>
					<Button type="ghost" onClick={onAddPizza}>
						<Icon name="plus" className="icon__plus" href="plus" />
						Добавить
						{addedCount && <span className="counter">{addedCount}</span>}
					</Button>
				</div>
			</div>
		</div>
	);
};

PizzaListItem.propTypes = {
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	onClickAddPizza: PropTypes.func,
	addedCount: PropTypes.number
};

export default PizzaListItem;
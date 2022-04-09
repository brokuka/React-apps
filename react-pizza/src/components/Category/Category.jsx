import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Button from '../Button/Button';

/* Style */
import "./Category.scss";

const Category = React.memo(({ activeCatIndex, items, onClickCategory }) => {

	const onClickAndToggle = (index, activeCatIndex) => {
		if (index === activeCatIndex) {
			onClickCategory(null);
		} else onClickCategory(index);
	};

	return (
		<div className="btn-group row">
			<Button active={activeCatIndex === null} onClick={() => onClickCategory(null)} type="grey">Все</Button>
			{items && items.map((item, index) => (
				<Button
					active={activeCatIndex === index}
					key={`${item}_${index}`}
					// onClick={() => onClickCategory(index)}
					onClick={() => onClickAndToggle(index, activeCatIndex)}
					type="grey"
				>
					{item}
				</Button>
			))}
		</div>
	);
});

Category.propTypes = {
	activeCatIndex: PropTypes.number,
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func
};

export default Category;
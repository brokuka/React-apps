import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/* Style */
import "./Sort.scss";
import Icon from '../Icon/Icon';


const Sort = React.memo(({ items, activeSortType, onClickSortType }) => {
	const [visiblePopup, setVisiblePopup] = useState(false);

	const sortRef = useRef();

	const activeLabel = items.find(obj => obj.type === activeSortType).name;

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)
	}, [])

	const handleOutsideClick = (e) => {
		const path = e.path || (e.composedPath && e.composedPath());

		if (!path.includes(sortRef.current)) setVisiblePopup(false);
	}

	const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup);

	const onSelectItem = (index) => {
		onClickSortType(index);
		toggleVisiblePopup(false)
	}


	return (
		<div className="sorting" ref={sortRef}>
			{/* <img className={visiblePopup ? 'rotated' : null} src="images/arrow.svg" alt="Arrow" width={10} height={6} /> */}
			<Icon name='arrow' href="arrow" className={visiblePopup ? 'rotated' : null} />
			Сортировка по: <span className="wrapped" onClick={toggleVisiblePopup}>{activeLabel}</span>

			{visiblePopup && (
				<ul className="sorting__list">
					{items && items.map((obj, index) => (
						<li
							onClick={() => onSelectItem(obj)}
							className={activeSortType === obj.type ? 'active' : ''}
							key={`${obj.type}_${index}`}
						>
							{obj.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
});

Sort.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	activeSortType: PropTypes.string.isRequired,
	onClickSortType: PropTypes.func.isRequired
};

Sort.defaultProps = {
	items: [],
};

export default Sort;
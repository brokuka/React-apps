import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


/* Style */
import "./Button.scss";



const Button = ({active, onClick, children, type, subtype, className, ...props}) => {
	return (
		<button
			onClick={onClick}
			className={cn('btn', className, {
				'btn--ghost': type === 'ghost',
				'btn--header-cart': type === 'header-cart',
				'btn--cart': type === 'cart',
				'btn--cart-x': type === 'cart' && subtype === 'x',
				'btn--grey': type === 'grey',
				'active': active
			})}
			{...props}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func,
	type: PropTypes.string,
	className: PropTypes.string
}

export default Button;
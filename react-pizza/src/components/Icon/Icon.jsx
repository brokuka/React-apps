import React from "react";
import PropTypes from 'prop-types';


const Icon = ({ name, color, size, stroke, className, href }) => {
	return (
		<>
			<svg className={`icon-${name} ${!className ? '' : className}`} fill={color} stroke={color} width={size} height={size}>
				<use xlinkHref={`#icon-${href}`}/>
			</svg>
		</>
	);
};

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.number,
	stroke: PropTypes.string
};

export default Icon;
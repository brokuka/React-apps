import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => {
	return (
		<ContentLoader
			speed={2}
			width={280}
			height={461}
			viewBox="0 0 280 461"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<circle cx="136" cy="129" r="128" />
			<rect x="0" y="277" rx="0" ry="0" width="280" height="24" />
			<rect x="0" y="315" rx="10" ry="10" width="280" height="83" />
			<rect x="0" y="423" rx="0" ry="0" width="79" height="27" />
			<rect x="139" y="414" rx="30" ry="30" width="141" height="44" />
		</ContentLoader>
	);
};

export default LoadingBlock;
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

/* Components */
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

/* Style */
import "./Header.scss";


const Header = () => {
	const {totalCount, totalPrice} = useSelector(({ cart }) => cart);

	let location = useLocation();

	return (
		<>
			<header className="header">
				<div className="container">
					<div className="header__inner">
						<Link className="header__logo" to="/">
							<Icon name='logo' href="logo" size={38}/>
							<div className="text-group">
								<div className="header__title">React Pizza</div>
								<div className="header__subtitle">самая вкусная пицца во вселенной</div>
							</div>
						</Link>
						{
							location.pathname !== '/cart' ?
								<Link to="cart" className='btn btn--header-cart'>
									<span className="header__cart">
										<span className="header__cart-total">{totalPrice}</span>
										<span className="header__cart-divider" />
										<span className="header__cart-count">
											<Icon name='cart' className="cart__icon" href="cart" />
											{totalCount}
										</span>
									</span>
								</Link>
							:
							null
						}

					</div>
				</div>
			</header>

			<hr/>
		</>
	);
};

export default Header;
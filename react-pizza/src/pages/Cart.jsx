import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { clearCart, removeCartItem, increaseCartItem, decreaseCartItem } from '../redux/actions/cart';

/* Style */
import "../style/blocks/cart.scss";

/* Components */
import { Button, CartItem, Icon } from '../components';
const MySwal = withReactContent(Swal);



const Cart = () => {
	const dispatch = useDispatch();
	const { items, totalCount, totalPrice } = useSelector(({ cart }) => cart);

	const addedPizzas = Object.keys(items).map(key => {
		return items[key].items[0]
	});

	const onClearCart = () => {
		if (!totalCount) return;

		MySwal.fire({
			title: 'Вы действительно хотите очистить корзину?',
			width: 400,
			icon: 'warning',
			padding: '2rem',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Очистить',
			cancelButtonText: 'Выход',
			// reverseButtons: true,
		}).then((res) => {
			if (res.isConfirmed) {
				dispatch(clearCart());
			}
		})
	}

	const onRemoveItem = (id) => {
		MySwal.fire({
			title: 'Вы действительно хотите удалить продукт?',
			width: 400,
			icon: 'warning',
			padding: '2rem',
			showCancelButton: true,
			confirmButtonColor: '#d33',
			cancelButtonColor: '#3085d6',
			confirmButtonText: 'Очистить',
			cancelButtonText: 'Выход',
			// reverseButtons: true,
		}).then((res) => {
			if (res.isConfirmed) {
				dispatch(removeCartItem(id));
			}
		})
	}

	const onIncreaseItem = (id) => {
		dispatch(increaseCartItem(id))
	}

	const onDecreaseItem = (id) => {
		dispatch(decreaseCartItem(id))
	}

	const onClickOrder = () => {
		MySwal.fire({
			title: 'Заказ успешно отправлен!',
			width: 400,
			icon: 'success',
			// cancelButtonText: 'Ок',
			showConfirmButton: false,
			// show
			timer: 3000,
			timerProgressBar: true,
		})
	}

	const View = () => {
		return (
			<>
				<div className="cart__header row jcsb aic">
					<div className="cart__title-group row aic">
						<Icon name='cart' className="cart__icon" href="cart2" />
						<h2 className="cart__title">Корзина</h2>
					</div>
					<span
						className={cn('cart__clear row inline aic', {
							'empty': !totalCount
						})}
						onClick={onClearCart}
					>
						<Icon name='trash' className="trash__icon" href="trash" />
						Очистить корзину
					</span>
				</div>
				<div className="cart__body">
					{
						addedPizzas.map(obj => (
							<CartItem
								key={obj.id}
								id={obj.id}
								name={obj.name}
								type={obj.type}
								size={obj.size}
								image={obj.imageUrl}
								price={items[obj.id].pizzasPrice}
								count={items[obj.id].pizzasCount}
								onRemove={onRemoveItem}
								onIncrease={onIncreaseItem}
								onDecrease={onDecreaseItem}
							/>
						))
					}
				</div>
				<div className="cart__footer">
					<div className="text-group">
						<span className="cart__pizzas">{totalCount}</span>
						<span className="cart__total">{totalPrice}</span>
					</div>
					<div className="btn-group text ac">
						<Link className="btn btn--back d-flex aic" to="/">
							<svg className="icon-back">
								<use xlinkHref="#icon-back" />
							</svg>
							Вернуться назад
						</Link>
						<Button className="btn--pay" onClick={onClickOrder}>Оплатить сейчас</Button>
					</div>
				</div>
			</>
		)
	};

	const EmptyCart = () => {
		return (
			<>
				<h2 className="cart__title">Корзина пуста 😕</h2>
				<div className="cart__subtitle">
					<p>Вероятней всего, вы не заказывали ещё пиццу.</p>
					<p>Для того, чтобы заказать пиццу, перейдите на главную страницу.</p>
				</div>
				<img className="img" src="./images/shopping-cart.svg" alt="Empty cart" width={300} height={255} />
				<Link className="btn btn--back btn--back-dark" to="/">Вернуться назад</Link>
			</>
		)
	}

	return (
		<div className="container container-xl">
			<div className="container container-sm">
				<div
					className={cn("cart", {
						"cart--empty": !totalCount
					})}
				>
					{
						totalCount ? <View /> : <EmptyCart />
					}
				</div>
			</div>
		</div>
	);
};

export default Cart;
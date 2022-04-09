import React from 'react';

/* Components */
import { Button, Icon } from "../../components"


const CartItem = ({ id, name, image, type, size, count, price, onRemove, onIncrease, onDecrease }) => {
	const handleRemoveClick = () => {
		onRemove(id);
	}

	const handleIncreaseClick = () => {
		onIncrease(id);
	}

	const handleDecreaseClick = () => {
		onDecrease(id);
	}

	return (
		<div className="cart__item">
			<div className="row g-0">
				<div className="col-6 col-sd-12 d-flex aic">
					<img className="img cart__image" src={image} alt="Pizza" />
					<div className="text-group">
						<h4 className="item-name">{name}</h4>
						<span className="item-specs">{type}, {size}см.</span>
					</div>
				</div>
				<div className="col-auto col-mb-12">
					<div className="btn-group d-flex aic">
						<Button type="cart" className="d-flex inline aic jcc" onClick={handleDecreaseClick}>
							<Icon name='minus' className="cart__minus" href="minus" />
						</Button>

						<span className="cart__item-count">{count}</span>

						<Button type="cart" className="d-flex inline aic jcc" onClick={handleIncreaseClick}>
							<Icon name='plus' className="cart__plus" href="plus" />
						</Button>
					</div>
				</div>
				<div className="col-auto text ac col-mb-12">
					<span className="cart__item-price">{price}</span>
				</div>
				<div className="col-auto">
					<Button type="cart" subtype="x" className="d-flex inline aic jcc" onClick={handleRemoveClick}>
						<Icon name='x' className="cart__x" href="x" />
					</Button>
				</div>
			</div>
		</div>

	);
};

export default CartItem;
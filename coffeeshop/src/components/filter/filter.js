/* React */
import { useState, useEffect } from "react";


/* Hook */
import useCoffeeService from "../../service/CoffeeService";


/* Style */
import "./filter.scss";

const Filter = () => {
    const   [cardsList, setCardsList] = useState([]);

    const {getAllCards, getCard} = useCoffeeService();

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = () => {
        getAllCards()
            .then(onCardsLoaded)
    }

    const onCardsLoaded = (newCards) => {
        // let ended = useCoffeeService._totalCards - offset <= 9;

        setCardsList(cardsList => [...cardsList, ...newCards]);
        // setNewItemLoading(newItemLoading => false);
        // setOffset(offset => offset + 9);
        // setCharactersEnded(charactersEnded => ended);
    }

    const View = (cards) => {
        const items = cards.map((item, i) => {
            const image = item.thumbnail.includes('image_not_available') ? {objectFit: 'unset'} : null;

            return (
                // <CSSTransition key={i} timeout={500} classNames="char__item">
                    <div className="cards__col" key={i}>
                        <a className="cards__item cards__item--filter" href={`coffee/${item.id}`}>
                            <div className="card__header">
                                <img src={item.thumbnail} alt={item.alt} style={image} />
                            </div>
                            <div className="card__content">
                                <div className="card__title">{item.title}</div>
                                <span className="card__country">{item.country}</span>
                                <span className="card__price">{item.price}&#36;</span>
                            </div>
                        </a>
                    </div>
                // </CSSTransition>
            )
        })

        return items;
    }

    const items = View(cardsList);

    return (
        <div className="filter">
            <div className="container">
                <div className="filter__inner">
                    <div className="filter__items">
                        <label htmlFor="filterText">
                            Looking for
                            <input className="filter__input" id="filterText" type="text" placeholder="start typing here..." />
                        </label>
                        <div className="btn-group">
                            <span>Or filter</span>
                            <button name="brazil" className="btn btn--filter">Brazil</button>
                            <button name="kenya" className="btn btn--filter">Kenya</button>
                            <button name="columbia" className="btn btn--filter">Columbia</button>
                        </div>
                    </div>
                    <div className="cards">
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;
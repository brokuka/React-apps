import {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import useCoffeeService from "../../service/CoffeeService";

/* Style */
import "../cards/cards.scss";

const OurBest = () => {
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
            if (i >= 3) return;

            const image = item.thumbnail.includes('image_not_available') ? {objectFit: 'unset'} : null;

            return (
                // <CSSTransition key={i} timeout={500} classNames="char__item">
                    <div className="cards__col" key={i}>
                        <Link className="cards__item" to={`coffee/${item.id}`}>
                            <div className="card__header">
                                <img src={item.thumbnail} alt={item.alt} style={image} />
                            </div>
                            <div className="card__content">
                                <div className="card__title">{item.title}</div>
                                <span className="card__price">{item.price}&#36;</span>
                            </div>
                        </Link>
                    </div>
                // </CSSTransition>
            )
        })

        return items;
    }

    const items = View(cardsList);

    return (
        <section className="section section--our_best">
        <div className="container">
            <h2 className="section__title">Our Best</h2>
            <div className="cards">
                {items}
            </div> {/* /.our_best */}
        </div> {/* /.container */}
    </section>
    )
}

export default OurBest;
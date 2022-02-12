import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const ComicsList = () => {
    const   [comicsList, setComicsList] = useState([]),
            [newItemLoading, setNewItemLoading] = useState(false),
            [offset, setOffset] = useState(0),
            [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
    }

    const onComicsLoaded = (newComics) => {
        let ended = useMarvelService._totalComics - offset <= 8;

        setComicsList(comicsList => [...comicsList, ...newComics]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setComicsEnded(comicsEnded => ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current[id].focus();
    }

    const View = (comics) => {
        const items = comics.map((item, i) => {
            return (
                <CSSTransition key={i} timeout={500} classNames={'comics__item'}>
                    <li className='comics__item' key={i}
                        onClick={() => {
                            focusOnItem(i);
                        }}
                        tabIndex={0}
                        ref={el => itemRefs.current[i] = el}>
                            <Link to={`${item.id}`}>
                                <img className="comics__item-img" src={item.thumbnail} alt={item.title} /* style={image} *//>
                                <div className="comics__item-name">{item.title}</div>
                                <div className="comics__item-price">{item.price}</div>
                            </Link>
                    </li>
                </CSSTransition>
            )
        })

        return items;
    }

    const   items = View(comicsList),
            errorMessage = error ? <ErrorMessage/> : null,
            spinner = loading && !newItemLoading ? <Spinner/> : null,
            spinerOnLoading = (newItemLoading) ? <Spinner/> : null;

        return (
            <div className="comics__list">
                <ul className="comics__grid" style={spinner ? {display: 'block'} : null}>
                    {errorMessage}
                    {spinner}
                    <TransitionGroup component={null}>
                        {items}
                    </TransitionGroup>
                </ul>
                {spinerOnLoading}
                <button className="button button__main button__long"
                        onClick={() => onRequest(offset)}
                        style={!loading && !comicsEnded ? {display: 'block'} : {display: 'none'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
}

export default ComicsList;
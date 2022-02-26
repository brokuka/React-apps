import {useState, useEffect, useRef, useMemo} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

const setContent = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const CharList = (props) => {
    const   [charactersList, setCharactersList] = useState([]),
            [newItemLoading, setNewItemLoading] = useState(false),
            [offset, setOffset] = useState(0),
            [charactersEnded, setCharactersEnded] = useState(false);

    const {loading, error, getAllCharacters, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true)
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllCharacters(offset)
            .then(onCharactersLoaded)
            .then(() => setProcess('confirmed'));
    }

    const onCharactersLoaded = (newCharacters) => {
        let ended = useMarvelService._totalCharacters - offset <= 9;

        setCharactersList(charactersList => [...charactersList, ...newCharacters]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharactersEnded(charactersEnded => ended);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current[id].focus();
    }

    const View = (characters) => {
        const items = characters.map((item, i) => {
            const image = item.thumbnail.includes('image_not_available') ? {objectFit: 'fill'} : null;

            return (
                <CSSTransition key={item.id} timeout={500} classNames="char__item">
                    <li className='char__item' key={item.id}
                        onClick={() => {
                            props.onCharacterSelected(item.id);
                            focusOnItem(i);
                        }}
                        tabIndex={0} onFocus={() => props.onCharacterSelected(item.id)}
                        ref={el => itemRefs.current[i] = el}>
                            <img src={item.thumbnail} alt={item.name} style={image}/>
                            <div className="char__name">{item.name}</div>
                    </li>
                </CSSTransition>
            )
        })

        return items;
    }

    const   items = View(charactersList),
            spinerOnLoading = newItemLoading ? <Spinner/> : null,
            elements = useMemo(() => {
                return setContent(process, () => items, newItemLoading)
            }, [process]);

    return (
        <div className="char__list">
            <ul className="char__grid" style={process === 'loading' && !newItemLoading ? {display: 'block'} : {display: 'grid'}}>
                <TransitionGroup component={null}>
                    {elements}
                </TransitionGroup>
            </ul>
            {spinerOnLoading}
            <button className="button button__main button__long"
                    onClick={() => onRequest(offset)}
                    style={process !== 'loading' && !charactersEnded ? {display: 'block'} : {display: 'none'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;
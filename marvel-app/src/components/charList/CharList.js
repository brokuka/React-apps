import {useState, useEffect, useRef} from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

const CharList = (props) => {
    const   [charactersList, setCharactersList] = useState([]),
            [loading, setLoading] = useState(true),
            [error, setError] = useState(false),
            [newItemLoading, setNewItemLoading] = useState(false),
            [offset, setOffset] = useState(0),
            [charactersEnded, setCharactersEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = (offset) => {
        onCharactersLoading();
        marvelService.getAllCharacters(offset)
            .then(onCharactersLoaded)
            .catch(onError);
    }

    const onCharactersLoading = () => {
        setNewItemLoading(true)
    }

    const onCharactersLoaded = (newCharacters) => {
        let ended = marvelService._totalCharacters - offset <= 9;

        setCharactersList(charactersList => [...charactersList, ...newCharacters]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharactersEnded(charactersEnded => ended);
    }

    const onError = () => {
        setError(true);
        setLoading(loading => false);
    }

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }

    const View = (characters) => {
        const items = characters.map((item, i) => {
            const image = item.thumbnail.includes('image_not_available') ? {objectFit: 'fill'} : null;

            return (
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
            )
        })

        return items;
    }

    const   items = View(charactersList),
            errorMessage = error ? <ErrorMessage/> : null,
            spinner = loading ? <Spinner/> : null,
            content = !(errorMessage || spinner) ? items : null,
            centered = loading ? {display: 'block'} : null,
            spinerOnLoading = (newItemLoading && !loading) ? <Spinner/> : null;

        /* Active class: char__item_selected */

        return (
            <div className="char__list">
                <ul className="char__grid" style={centered}>
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
                {spinerOnLoading}
                <button className="button button__main button__long"
                        disabled={newItemLoading && !loading}
                        onClick={() => onRequest(offset)}
                        style={!loading && !charactersEnded ? {display: 'block'} : {display: 'none'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
}

export default CharList;
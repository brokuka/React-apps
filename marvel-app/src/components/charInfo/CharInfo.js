import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
    const   [character, setCharacter] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateCharacter()
    }, [props.characterId])

    const onCharacterLoaded = (character) => {
        setCharacter(character);
    }

    const updateCharacter = () => {
        clearError();

        const {characterId} = props;

        if (!characterId) return

        getCharacter(characterId)
            .then(onCharacterLoaded);
    }

    const   skeleton = character || loading || error ? null : <Skeleton/>,
            errorMessage = error ? <ErrorMessage/> : null,
            spinner = loading ? <Spinner/> : null,
            content = !(error || loading || !character) ? <View character={character}/> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

const View = ({character}) => {
    const   {name, description, thumbnail, homepage, wiki, comics} = character,
            image = thumbnail.includes('image_not_available') ? {objectFit: 'fill'} : null;

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={image} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">{description}</div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length === 0 ? "This character doesn't have comics :(" : null}
                {
                    comics.map((item, i) => {
                        if (i >= 9) return;
                        // match(/\d/ig).join('');
                        const filteredComics = item.resourceURI.replace(/\D/g, '').slice(1);

                        return (
                            <Link to={`/comics/${filteredComics}`} style={{width: '100%'}} key={i}>
                                <li className="char__comics-item">
                                    {item.name}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CharInfo;
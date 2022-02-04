import {useState, useEffect } from 'react';
import ErrorMessage from '../errorMessage/errorMessage';
import Spinner from '../spinner/Spinner';
import MarvelService from '../../services/MarvelService';
import Skeleton from '../skeleton/Skeleton';

import './charInfo.scss';

const CharInfo = (props) => {
    const   [character, setCharacter] = useState(null),
            [loading, setLoading] = useState(false),
            [error, setError] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        updateCharacter()
    }, [])

    useEffect(() => {
        updateCharacter()
    }, [props.characterId])

    const onCharacterLoading = () => {
        setLoading(true);
    }

    const onCharacterLoaded = (character) => {
        setCharacter(character);
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const updateCharacter = () => {
        const {characterId} = props;

        if (!characterId) return

        onCharacterLoading();

        marvelService
            .getCharacter(characterId)
            .then(onCharacterLoaded)
            .catch(onError);
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

                        return (
                            <a href={item.resourceURI} target="_blank" style={{width: '100%'}} key={i}>
                                <li className="char__comics-item">
                                    {item.name}
                                </li>
                            </a>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CharInfo;
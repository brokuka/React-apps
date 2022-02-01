import React, { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        characters: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 0,
        charactersEnded: false,
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharactersLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharactersLoaded)
            .catch(this.onError);
    }

    onCharactersLoading = () => {
        this.setState({newItemLoading: true})
    }

    onCharactersLoaded = (newCharacters) => {
        let ended = this.marvelService._totalCharacters - this.state.offset <= 9;

        this.setState(({characters, offset}) => ({
            characters: [...characters, ...newCharacters],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charactersEnded: ended
        }))
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    View = (characters) => {
        const items = characters.map((item, i) => {
            const   image = item.thumbnail.includes('image_not_available') ? {objectFit: 'fill'} : null;

            return (
                <li className='char__item' key={item.id}
                onClick={() => {
                    this.props.onCharacterSelected(item.id);
                }}
                tabIndex={0} onFocus={() => this.props.onCharacterSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={image}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })

        return items;
    }

    render() {
        const   {characters, loading, error, newItemLoading, offset, charactersEnded} = this.state,
                items = this.View(characters),
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
                        onClick={() => this.onRequest(offset)}
                        style={!loading && !charactersEnded ? {display: 'block'} : {display: 'none'}}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;
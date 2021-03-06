import {useHttp} from '../hooks/http.hook'

const useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const   _apiBase = 'https://gateway.marvel.com:443/v1/public/',
            _apiKey = 'apikey=beaf4c2fe5feddb6dc23f95112d728dc',
            charactersLimit = 'limit=9',
            comicsLimit = 'limit=8';

    let _charactersOffset = 210,
        _comicsOffset = 0,
        _totalCharacters = 0,
        _totalComics = 0;

    const getAllCharacters = async (offset = _charactersOffset) => {
        const result = await request(`${_apiBase}characters?${charactersLimit}&offset=${offset}&${_apiKey}`);

        _totalCharacters = result.data.total;

        return result.data.results.map(_transformCharacter);
    }

    const getAllComics = async (offset = _charactersOffset) => {
        const result = await request(`${_apiBase}comics?orderBy=issueNumber&${comicsLimit}&offset=${offset}&${_apiKey}`);

        _totalComics = result.data.total;

        return result.data.results.map(_transformComics);
    }

    const getCharacter = async (id) => {
        const result = await request(`${_apiBase}characters/${id}?&${_apiKey}`);

        return _transformCharacter(result.data.results[0]);
    }

    const getComic = async (id) => {
        const result = await request(`${_apiBase}comics/${id}?&${_apiKey}`);

        return _transformComics(result.data.results[0]);
    }

    const getCharacterByName = async (name) => {
        const result = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);

        return result.data.results.map(_transformCharacter);
    }

    const _transformCharacter = (character) => {

        return {
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description || 'no description',
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not avaliable',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            pages: comics.pageCount,
            language: comics.textObjects.language || 'en-us'
        }
    }

    return {
        process,
        setProcess,
        getAllCharacters,
        getAllComics,
        getCharacter,
        getComic,
        getCharacterByName,
        clearError
    }
}

export default useMarvelService;
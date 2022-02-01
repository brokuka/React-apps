// const postData = async (url, data) => {
//     let result = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: data
//     });

//     return await result.json();
// };

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=beaf4c2fe5feddb6dc23f95112d728dc';
    charactersLimit = 'limit=9';
    _baseOffset = 210;
    _totalCharacters = 0;

    getResource = async (url) => {
        let result = await fetch(url);

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json();
    }

    getAllCharacters = async (offset = this._baseOffset) => {
        const result = await this.getResource(`${this._apiBase}characters?${this.charactersLimit}&offset=${offset}&${this._apiKey}`);

        this._totalCharacters = result.data.total;

        return result.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const result = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);

        return this._transformCharacter(result.data.results[0]);
    }


    _transformCharacter = (character) => {
        const descr = (str, num) => {
            if (str) return str.slice(0, num) + '...';
            else return 'There is no description';
        }

        return {
            id: character.id,
            name: character.name,
            description: descr(character.description, 150),
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }
}

export default MarvelService;
import useHttp from "../hooks/http.hook";

const useCoffeeService = () => {
    const {loading, error, request, clearError} = useHttp();

    const url = "http://localhost:3000/data";

    let _totalCards = 0;

    const getAllCards = async () => {
        const result = await request(`${url}`);

        _totalCards = result.total;

        return result.results.map(_transformCard);
    }

    const getCard = async (id) => {
        const   result = await request(`${url}`),
                filtered = await result.results.filter(item => item.id === id);

        return _transformCard(filtered[0]);
    }

    const _transformCard = (card) => {
        return {
            id: card.id,
            title: card.title,
            price: card.price,
            selled: card.selled,
            country: card.country,
            description: card.description,
            thumbnail: (card.thumbnail.path || card.thumbnail.empty)  + '.' + card.thumbnail.extension,
            alt: card.thumbnail.alt,
            fullPicture: (card.fullPicture.path || card.fullPicture.empty) + '.' + card.fullPicture.extension,
            altBig: card.fullPicture.alt
        }
    }

    return {loading, error, getAllCards, getCard, clearError}
}

export default useCoffeeService;
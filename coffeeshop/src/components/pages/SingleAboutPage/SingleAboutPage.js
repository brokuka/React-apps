import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* Components */
import useCoffeeService from "../../../service/CoffeeService";
import ErrorMessage from "../../errorMessage/errorMessage";
import Spinner from "../../spinner/Spinner";
import SectionIcon from "../../sectionIcon/sectionIcon";

/* Style */
import "./SingleAboutPage.scss";

const SingleAboutPage = () => {
    const [about, setAbout] = useState(null);

    const {cardId} = useParams();

    const {loading, error, getCard, clearError} = useCoffeeService();

    useEffect(() => {
        updateCard()
    }, [cardId])

    const updateCard = () => {
        clearError();

        getCard(cardId)
            .then(onAboutLoaded);
    }

    const onAboutLoaded = (about) => {
        setAbout(about);
    }

    const   errorMessage = error ? <ErrorMessage/> : null,
            spinner = loading ? <Spinner/> : null,
            content = !(error || loading || !about) ? <View about={about}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({about}) => {
    const {price, description, country, fullPicture, altBig} = about;

    return (
        <main className="main">
            <section className="section section--about_it">
                <div className="container">
                    <div className="about_it">
                        <div className="about_it__left">
                            <img src={fullPicture} alt={altBig} />
                        </div>
                        <div className="about_it__right">
                            <div className="section__title">
                                <h2>About it</h2>
                                <SectionIcon/>
                            </div>
                            <div className="about_it-country">Country: <span>{country}</span></div>
                            <div className="about_it-description">Description: <p>{description}</p></div>
                            <div className="about_it-price">Price: <span>{price}&#36;</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SingleAboutPage;
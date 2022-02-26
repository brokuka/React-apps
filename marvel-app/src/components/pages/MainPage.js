import { useState } from "react";
import { Helmet } from 'react-helmet';

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
import CharacterSearchForm from "../charSearchForm/CharSearchForm";

const MainPage = () => {

    const [selectedCharacter, setCharacter] = useState(null);

    const onCharacterSelected = (id) => {
        setCharacter(id);
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharacterSelected={onCharacterSelected}/>
                </ErrorBoundary>
                <div>
                    <ErrorBoundary>
                        <CharInfo characterId={selectedCharacter}/>
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharacterSearchForm/>
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;
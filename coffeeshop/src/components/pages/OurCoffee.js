import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import Coffee from "../coffee/coffee";
import Filter from "../filter/filter";
import Nav from "../nav/nav";
import SingleAboutPage from "./SingleAboutPage/SingleAboutPage";

const OurCoffee = () => {
    return (
        <>
            <header className="header header--coffee">
                <div className="container">
                    <Nav/>
                </div>
                <div className="intro">
                    <div className="container">
                        <div className="intro__inner">
                            <h1 className="intro__title">Our Coffee</h1>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                <Routes>
                    <Route path="/" element={<Children/>}/>
                    <Route path=":cardId" element={<ChildWithErrorBoundary/>}/>
                </Routes>
            </main>
        </>
    )
}

const Children = () => {
    return (
        <>
            <Coffee/>
            <Filter/>
        </>
    )
}

const ChildWithErrorBoundary = () => {
    return (
        <>
            <ErrorBoundary>
                <SingleAboutPage/>
            </ErrorBoundary>
        </>
    )
}

export default OurCoffee;
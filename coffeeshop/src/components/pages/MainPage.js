/* Components */
import Nav from "../nav/nav";
import OurBest from "../ourBest/ourBest";
import About from "../about/about"

/* Style */
import "../intro/intro.scss";

const MainPage = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Nav/>
                </div>
                <div className="intro">
                    <div className="container">
                        <div className="intro__inner">
                            <h1 className="intro__title">Everything You Love About Coffee</h1>
                            <div className="intro__icon">
                                <img className="icon" src="images/beans_white.svg" alt="Intro icon" />
                            </div>
                            <h2>We makes every day full of energy and taste</h2>
                            <h2>Want to try our beans?</h2>
                                <a className="btn" href="/">More</a>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                <About/>
                <OurBest/>
            </main>
        </>
    )
}

export default MainPage;
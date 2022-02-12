/* Components */
import SectionIcon from "../sectionIcon/sectionIcon";

/* Style */
import "./coffee.scss";

const Coffee = () => {
    return (
        <section className="section section--coffee">
            <div className="container">
                <div className="coffee">
                    <div className="coffee__left">
                        <img className="coffee_img" src="images/ourcoffe_img.jpg" alt="Coffee image" />
                    </div>
                    <div className="coffee__right">
                        <div className="section__title">
                            <h2>About our beans</h2>
                            <SectionIcon/>
                        </div>
                        <div className="section__text">
                            <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                            <p>Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions.
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Coffee;
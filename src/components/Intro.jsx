import "../styles/Intro.scss"
import Me from "../images/me.png"

const Intro = () => {
    return ( <div className="intro" id="intro">
        <div className="left">
            <div className="image">
                <img src={Me} alt="me" />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Cześć, jestem</h2>
                <h1>Kamil Dobosz</h1>
                <h3>Programista Front-end</h3>
            </div>
            <a href="#portfolio">
                <span class="material-icons">
                    expand_more
                </span>
            </a>
        </div>
    </div> );
}
 
export default Intro;
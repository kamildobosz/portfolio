import { useState, useEffect } from "react";
import "../styles/Portfolio.scss"
import Portfoliolist from "./PorftolioList";
import { portfolio, secondPortfolio, quizGame, memoryGame, budgetApp, weatherApp, WPWebsite, secondWPWebsite } from "../data";
import "../data"


const Portfolio = () => {

    const [selected, setSelected] = useState("portfolio")
    const [portfolioItem, setPortfolioItem] = useState([])

const list = [
    {
        id: "portfolio",
        title: "Portfolio",
},
{
    id: "secondPortfolio",
    title: "2nd Portfolio",
},
{
    id: "quizGame",
    title: "Quiz game",
},
{
    id: "memoryGame",
    title: "Memory Game",
},
{
    id: "budgetApp",
    title: "Budget App",
},
{
    id: "weatherApp",
    title: "Weather App",
},
{
    id: "wordpress",
    title: "WP Website",
},
{
    id: "secondWordpress",
    title: "2nd WP Website",
}

]



useEffect(() => {
    
    switch(selected){
        case "portfolio":
            setPortfolioItem(portfolio);
            break;
             case "secondPortfolio":
            setPortfolioItem(secondPortfolio);
            break;
            case "quizGame":
            setPortfolioItem(quizGame);
            break;
            case "memoryGame":
            setPortfolioItem(memoryGame);
            break;
            case "budgetApp":
            setPortfolioItem(budgetApp);
            break;
            case "weatherApp":
            setPortfolioItem(weatherApp);
            break;
            case "wordpress":
            setPortfolioItem(WPWebsite);
            break;
            case "secondWordpress":
            setPortfolioItem(secondWPWebsite);
            break;
            default:
                setPortfolioItem(portfolio)
    }
    
}, [selected])

    return ( <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <div className = "myPortfolio">
        <ul>
            {list.map((item)=>(
                <Portfoliolist key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
            ))}
        </ul>
        </div>
        
        <div className="container">
         {portfolioItem.map((item) => (
             <div className="item">
             <img src={item.img} alt="" />
            <h3>{item.desc}</h3>
        </div>
         ))}
               


            
           
            </div>
            
        

        
    </div>  );
}
 
export default Portfolio;
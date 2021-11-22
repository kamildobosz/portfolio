import { useState } from "react"
import "../styles/Skills.scss"
import JS from "../images/javascript.png"
import react from "../images/react.png"
import html from "../images/HTML5png.png"
import css from "../images/CSS3.png"
import ts from "../images/ts.png"
import git from "../images/Git.png"
import WP from "../images/wp.png"


const Skills = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {id: 1,
        title: 'Javascript',
        img: JS

    },
    {id: 2,
        title: 'React JS',
        img: react

    },
    {id: 3,
        title: 'HTML',
        img: html

    },
    {id: 4,
        title: 'CSS',
        img: css

    },
    {id: 5,
        title: 'Typescript',
        img: ts
    },
    {id: 6,
        title: 'Git',
        img: git

    },
    {id: 7,
        title: 'Wordpress',
        img: WP

    }
    ]


const handleClick = (side)=>{

    side === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
    setCurrentSlide(currentSlide<data.length-1? currentSlide+1:0)


}

    return ( <div className="skills" id="skills">
                 <h1 className="main-title">Technologie, które znam</h1>
                <span class="material-icons right" onClick={()=>handleClick('right')}>
                     arrow_forward
                </span>
                <span class="material-icons left" onClick={()=>handleClick('left')}>
                     arrow_back
                </span>
                <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                 { data.map(item =>(
                  <div className="cointainer">
                    <div className="item">
                        <div className="left">
                            <h1 className="title">{item.title}</h1>
                             <p>{item.desc}
                             </p>
                        </div>
                        <div className="right">
                             <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
        </div> );
}
 
export default Skills;
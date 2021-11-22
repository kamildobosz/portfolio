import "../styles/Topbar.scss"

const Topbar = ({menuOpen, setMenuOpen}) => {

const handleHamburger = ()=>{
   
    setMenuOpen(!menuOpen)
}

    return ( <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Kamil Dobosz</a>
                <div className="itemContainer">
                    <span class="material-icons">
                        smartphone
                    </span>
                    <p>537 260 196</p>
                </div>
                <div className="itemContainer">
                    <span class="material-icons">
                       email
                    </span>
                    <p>kamdobosz26@wp.pl</p>
                </div>
                
            </div>
            <div className="right">
                <div className="hamburger" onClick = {handleHamburger}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>  );
}
 
export default Topbar;
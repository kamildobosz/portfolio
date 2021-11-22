import { useState } from "react"
import "../styles/Contact.scss"
import contact from '../images/contact.png'

const Contact = () => {

    const [message, setMessage] = useState(false)

const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
}

    return ( <div className="contact" id="contact">
        <div className="left">
            <img src={contact} alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email'/>
                <textarea placeholder="Message"></textarea>
                <button type="submit">Wyślij</button>
                {message ? <h3>Dziękuję za widomość</h3> : null}
            </form>
        </div>
    </div>  );
}
 
export default Contact;
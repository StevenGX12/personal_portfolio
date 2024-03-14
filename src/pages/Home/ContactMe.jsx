import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
    return (
        <section id="ContactMe" className="contact--section">
            <h2>Contact Me</h2>
            <div className="contact--list">
                <ul>
                    <li>
                        <FaLinkedin style={{color:"#0A66C2", fontSize:"4em"}}/>    
                        <a href="https://www.linkedin.com/in/guan-xiao-870997248/" target="_blank" rel="noopener noreferrer">
                            Connect with me on LinkedIn
                        </a>
                    </li>
                    <li>
                        <FaGithub style={{fontSize:"4em"}}/> 
                        <a href="https://github.com/StevenGX12" target="_blank" rel="noopener noreferrer">
                            Follow me on GitHub
                        </a>
                    </li>
                    <li>
                        <FaTelegram style={{color:"#0088cc", fontSize:"4em"}}/> 
                        <a href="https://t.me/stevengx06" target="_blank" rel="noopener noreferrer">
                            Add me on Telegram
                        </a>
                    </li>
                    <li>
                        <FaWhatsapp style={{color:"#25d366", fontSize:"4em"}}/> 
                        <a href="https://wa.me/6584012686" target="_blank" rel="noopener noreferrer">
                            Contact me through WhatsApp
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
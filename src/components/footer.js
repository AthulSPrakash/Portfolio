import Contact from './data/contactData'

export default function Footer(){
    const links = Contact.map(link=>{
        return(
            <li className="hover-circle" key={link.id}>
                <a
                    href={link.url} 
                    className={`fab fa-${link.name}`} 
                    title={`Go to ${link.name}`}
                >
                </a>
            </li>
        )
    })
    return(
        <footer>
            <div className="mail">
                <a href="mailto:athulsprakash@gmail.com?body=Hi," title="Mail" aria-label="mail link">
                    Let's Chat
                </a>
            </div>
            <div className="icons">
                <ul className="contact" aria-label="contact links list">
                    {links}
                </ul>
            </div>
            <div className="license" aria-label="license details">
                <p>
                    This work is licensed under 
                    <a href="http://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer">
                        CC BY-NC 4.0
                        <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="creative common icon" />
                        <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="creative common icon" />
                        <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt="creative common icon" />
                    </a>
                </p>
            </div>
        </footer>
    )
}
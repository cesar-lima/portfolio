import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import '../styles/contacts.scss'

export function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="section-title">
                MORE OF ME -
            </div>
            
            <div className="section-subtitle">
                On The Web 🌐
            </div>

            <div className="contacts-container">
                <div className="contact-card">
                    <a href="https://github.com/cesar-lima" target="_blank">
                        <div className="card-icon">
                        <GithubLogo size={26} weight="fill" />
                        </div>

                        <div className="card-title">
                            GitHub
                        </div>
                    </a>
                </div>

                <div className="contact-card">
                    <a href="https://br.linkedin.com/in/cesar-lima-correia" target="_blank">
                        <div className="card-icon">
                        <LinkedinLogo size={26} weight="fill" />
                        </div>

                        <div className="card-title">
                            LinkedIn
                        </div>
                    </a>
                </div>

                <div className="contact-card">
                    <a href="mailto:cesarr340@gmail.com" target="_blank" >
                        <div className="card-icon">
                        <Envelope size={26} />
                        </div>

                        <div className="card-title">
                            Email - <span>cesarr340@gmail.com</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
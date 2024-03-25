import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import '../styles/contacts.scss'

export function Contacts() {
    return (
        <section className="contacts">

            <div className="more-of-me">
                <div className="section-title">
                    MORE OF ME -
                </div>
                <div className="section-subtitle">
                    On The Web 🌐
                </div>

                <div className='contacts-container'>
                    <a href="https://github.com/cesar-lima">
                        <div>
                            <GithubLogo size={30} weight="fill" />
                        </div>

                        <div>
                            Github.
                        </div>
                    </a>

                    <a href="">
                        <div>
                            <LinkedinLogo size={30} weight="fill" />
                        </div>

                        <div>
                            linkedin.
                        </div>
                    </a>
                </div>
            </div>


            <div className='border'></div>


            <div className="email-and-tel">
                <div className="section-title">
                    - CONTACT
                </div>
                <div className="section-subtitle">
                    😁 Look Who’s Here
                </div>

                <div className='contacts-container'>
                    <div className='contacts-card'>

                    </div>

                    <div className="contacts-card">

                    </div>
                </div>
            </div>

        </section>
    )
}
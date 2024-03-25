import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react"
import "../styles/projects.scss"

export function Projects(){
    return(
        <section className="projects">
            <div className="section-title">
                FEATURED PROJECTS -
            </div>
            <div className="section-subtitle">
                Stuff I've Worked On 📈
            </div>

            <div className="projects-container">
                <div className="card gradient1">
                    <div className="links">
                        <a href="https://docexpress.netlify.app" target="_blank">
                            <ArrowSquareOut size={30} />
                        </a>
                    </div>

                    <div className="title">
                        Document<br />Express.
                    </div>

                    <div className="techs">
                        HTML&nbsp; CSS&nbsp; JS&nbsp; API
                    </div>
                </div>

                <div className="card gradient3">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/eschool">
                            <GithubLogo size={30} weight="fill" />
                        </a>
                    </div>

                    <div className="title">
                        E-school.<br /><br />
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; SCSS
                    </div>
                </div>

                <div className="card gradient2">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/letmeask">
                            <GithubLogo size={30} weight="fill" />
                        </a>
                    </div>

                    <div className="title">
                        Let<br />Me Ask.
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; SCSS
                    </div>
                </div>

                <div className="card gradient4">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/link-platform">
                            <GithubLogo size={30} weight="fill" />
                        </a>
                    </div>

                    <div className="title">
                        Link<br />Platform.
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; CSS
                    </div>
                </div>

                <div className="card gradient5">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/pricing-table">
                            <GithubLogo size={30} weight="fill" />
                        </a>
                    </div>

                    <div className="title">
                        Pricing<br />Table.
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; SCSS
                    </div>
                </div>
            </div>
        </section>
    )
}
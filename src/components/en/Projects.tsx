import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react"
import "../../styles/projects.scss"

export function Projects(){
    return(
        <section id="projects" className="projects">
            <div className="section-title">
                FEATURED PROJECTS -
            </div>
            <div className="section-subtitle">
                Stuff I've Worked On 📈
            </div>

            <div className="projects-container">
                <div className="project-card gradient1">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/document-express" target="_blank">
                            <GithubLogo size={29} weight="fill" />
                        </a>
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

                <div className="project-card gradient3">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/eschool" target="_blank">
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

                <div className="project-card gradient2">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/letmeask" target="_blank">
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

                <div className="project-card gradient4">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/link-platform" target="_blank">
                            <GithubLogo size={29} weight="fill" />
                        </a>
                        <a href="https://remakelinktree.netlify.app/" target="_blank">
                            <ArrowSquareOut size={30} />
                        </a>
                    </div>

                    <div className="title">
                        Link<br />Platform.
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; CSS
                    </div>
                </div>

                <div className="project-card gradient5">
                    <div className="links">
                        <a href="https://github.com/cesar-lima/pricing-table" target="_blank">
                            <GithubLogo size={30} weight="fill" />
                        </a>
                        <a href="https://pricing-table-check.netlify.app" target="_blank">
                            <ArrowSquareOut size={30} />
                        </a>
                    </div>

                    <div className="title">
                        Pricing<br />Table.
                    </div>

                    <div className="techs">
                        REACT&nbsp; TS&nbsp; SCSS
                    </div>
                </div>

                <div className="project-card gradient6">
                    <div className="links">
                        <a href="https://multidisciplinarevoluire.com.br" target="_blank">
                            <ArrowSquareOut size={30} />
                        </a>
                    </div>

                    <div className="title">
                        Evoluire.<br /><br />
                    </div>

                    <div className="techs">
                        HTML&nbsp; CSS&nbsp; JS
                    </div>
                </div>
            </div>
        </section>
    )
}

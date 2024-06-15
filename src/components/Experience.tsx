import '../styles/experience.scss'

export function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="section-title">
                EXPERIENCE -
            </div>
            <div className="section-subtitle">
                Work & Studies 👨‍💻
            </div>

            {/* work experience */}
            <div className="experience-container">
                <div className="experience-wrapper">

                    <div className="experience-item">
                        <div className="experience-date">2022 - Present</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                                IT Assistant
                            </div>

                            <div className="experience-content-subtitle">
                                Civil Registration Officer of Natural Persons of the 21 Subdistrict-Saúde
                            </div>

                            <div className="experience-content-description">
                            Diagnose and resolve technical problems.
                            Answer user questions and provide guidance on how to use a
                            product or service. Offer remote assistance, through chat, telephone or remote access
                          . Keep products or systems up to date.
                            Record all interactions and solutions provided to users, thus creating a
                            knowledge base with valuable information to improve business processes
                            technical support.
                            Provide basic training to users to avoid common problems.
                            Diagnose and troubleshoot hardware issues, such as peripherals and others
                            components. Manage and create web applications for the company. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* study experience */}
            <div className="experience-container">
                <div className="experience-wrapper">
                    <div className="experience-item">
                        <div className="experience-date">2022 - Present</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                                Bachelor's Degree in Information Systems
                            </div>

                            <div className="experience-content-subtitle">
                                Centro Universitário FMU | FIAM FAAM
                            </div>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-date">2019 - 2021</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                                Technical Course in IT for the internet
                            </div>

                            <div className="experience-content-subtitle">
                                CPS - Centro Paulo Souza
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
import '../../styles/about.scss'

export function About() {
    return (
        <section id="about">
            <div className="e-card playing">
                <div className="image"></div>

                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>

                <div className="infotop">
                    About Me
                    <div className="text">
                        I'm a programmer focused on creating user experiences that go beyond expectations.
                        Based on my experience developing web applications, i'm eager to leverage cutting-edge
                        technologies to create innovative solutions that captivate users and surpass market standards.
                        My dedication to staying up to date with the latest advances ensures that my work remains in step
                        with technological innovations.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
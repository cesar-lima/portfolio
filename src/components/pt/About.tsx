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
                    Sobre Mim
                    <div className="text">
                        Sou um programador focado em criar experiências para o usuário que vão além das expectativas.
                        Com base em minha experiência no desenvolvimento web, estou ansioso para aproveitar o que há 
                        de mais moderno para criar soluções inovadoras que cativem os usuários e superem o padrão do 
                        mercado. Minha dedicação Minha dedicação em me manter atualizado com os avanços mais recentes 
                        garante que meu trabalho permaneça em sintonia com as inovações tecnológicas.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
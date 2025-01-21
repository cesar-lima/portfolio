import '../../styles/experience.scss'

export function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="section-title">
                EXPERIÊNCIA -
            </div>
            <div className="section-subtitle">
                Trabalho e Estudos 👨‍💻
            </div>

            {/* work experience */}
            <div className="experience-container">
                <div className="experience-wrapper">

                    <div className="experience-item">
                        <div className="experience-date">2022 - Atual</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                                Auxiliar de TI
                            </div>

                            <div className="experience-date-responsive">2022 - Atual</div>

                            <div className="experience-content-subtitle">
                                Oficial de Registro Civil de Pessoas Naturais do 21º Subdistrito - Saúde
                            </div>

                            <div className="experience-content-description">
                            Diagnosticar e resolver problemas técnicos.
                            Responda às perguntas dos usuários e forneça orientações sobre como usar um
                            produto ou serviço. Ofereça atendimento remoto, por chat, telefone ou acesso remoto
                          . Mantenha produtos ou sistemas atualizados.
                            Registrar todas as interações e soluções fornecidas aos usuários, criando assim um
                            base de conhecimento com informações valiosas para melhorar os processos de negócios
                            suporte técnico.
                            Forneça treinamento básico aos usuários para evitar problemas comuns.
                            Diagnosticar e solucionar problemas de hardware, como periféricos e outros
                            componentes. Gerenciar e criar aplicações web para a empresa.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* study experience */}
            <div className="experience-container">
                <div className="experience-wrapper">
                    <div className="experience-item">
                        <div className="experience-date">2022 - Atual</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                               Bacharelado em Sistemas de Informação
                            </div>

                            <div className="experience-date-responsive">2022 - Atual</div>

                            <div className="experience-content-subtitle">
                                Centro Universitário FMU | FIAM FAAM
                            </div>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-date">2019 - 2021</div>
                        <div className="experience-content">
                            <div className="experience-content-title">
                                Curso Técnico em Informática para a Internet
                            </div>

                            <div className="experience-date-reponsive">2019 - 2021</div>

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
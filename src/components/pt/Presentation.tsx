import { DownloadSimple } from '@phosphor-icons/react'
import '../../styles/presentation.scss'
import CV from '../../assets/cv/César Lima Correia CV - pt.pdf'

export function Presentation() {
    return (
        <section className='presentation'>
            <div>
                Olá 👋, meu nome é
            </div>
            <div className='gradient'>
                César.
            </div>
            <div>
                DESENVOLVEDOR FRONT-END ✨
            </div>
            <div>
                Sou um dev front-end<br /> e moro em São Paulo.
            </div>
            <div>
                <a href="#contacts">
                    <button>
                        CONTATO
                    </button>
                </a>

                <a href={CV} target='_blank'>
                    <button>
                        DOWNLOAD CV <DownloadSimple size={20} color="#ffffff" />
                    </button>
                </a>
            </div>
        </section>
    )
}
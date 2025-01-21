import { DownloadSimple } from '@phosphor-icons/react'
import '../../styles/presentation.scss'
import CV from '../../../public/César Lima Correia - CV en.pdf'

export function Presentation() {
    return (
        <section className='presentation'>
            <div>
                HI THERE 👋, I'M
            </div>
            <div className='gradient'>
                César.
            </div>
            <div>
                FRONT-END DEVELOPER ✨
            </div>
            <div>
                I'm a front-end developer<br />based in São Paulo, Brazil
            </div>
            <div>
                <a href="#contacts">
                    <button>
                        HIRE ME
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
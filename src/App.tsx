import { About as AboutEN } from "./components/en/About"
import { Contacts as ContactsEN } from "./components/en/Contacts"
import { Experience as ExperienceEN } from "./components/en/Experience"
import { Nav as NavEN } from "./components/en/Nav"
import { Presentation as PresentationEN } from "./components/en/Presentation"
import { Projects as ProjectsEN } from "./components/en/Projects"

import { About as AboutPT } from "./components/pt/About"
import { Contacts as ContactsPT } from "./components/pt/Contacts"
import { Experience as ExperiencePT } from "./components/pt/Experience"
import { Nav as NavPT } from "./components/pt/Nav"
import { Presentation as PresentationPT } from "./components/pt/Presentation"
import { Projects as ProjectsPT } from "./components/pt/Projects"

import "./styles/global.scss"
import { useEffect, useState } from "react"

export function App() {
  const [browserLanguage, setBrowserLanguage] = useState("");

  useEffect(() => {
    // Detecta o idioma do navegador
    const language = navigator.language || navigator.languages[0];
    setBrowserLanguage(language);
  }, []);

  return (
    (browserLanguage === "pt-BR") ? (
      <>
        <NavPT />
        <PresentationPT />
        <AboutPT />
        <ExperiencePT />
        <ProjectsPT />
        <ContactsPT />
      </>
    ) : (
      <>
        <NavEN />
        <PresentationEN />
        <AboutEN />
        <ExperienceEN />
        <ProjectsEN />
        <ContactsEN />
      </>
    )
  )
}

export default App

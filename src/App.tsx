import { About } from "./components/About"
import { Contacts } from "./components/Contacts"
import { Experience } from "./components/Experience"
import { Nav } from "./components/Nav"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"
import "./styles/global.scss"

export function App() {
  return (
    <>
      <Nav />
      <Presentation />
      <About />
      <Experience />
      <Projects />
      <Contacts />
    </>
  )
}

export default App

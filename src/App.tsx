import { Contacts } from "./components/Contacts"
import { Nav } from "./components/Nav"
import { Presentation } from "./components/Presentation"
import { Projects } from "./components/Projects"
import "./styles/global.scss"

export function App() {
  return (
    <>
      <Nav />
      <Presentation />
      <Projects />
      <Contacts />
    </>
  )
}

export default App

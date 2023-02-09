import { Banner } from "./components/banner"
import { Skills } from "./components/habilidades"
import { Projetos } from "./components/projetos"
import { Contato } from "./components/contato"
import { Creditos } from "./components/creditos"
import "./Styles.css"

function App() {

  return (
    <div className="App">
    <Banner/>
    <Skills/>
    <Projetos/>
    <Contato/>
    <Creditos/>
    </div>
  )
}

export default App

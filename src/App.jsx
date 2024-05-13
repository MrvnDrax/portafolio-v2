import "./App.css";
import { animate, motion } from "framer-motion";
import ExpCard from "./components/ExpCard";
import InicioCard from "./components/InicioCard";
import NavBar from "./components/NavBar";
import ProyectosCard from "./components/ProyectosCard";
import SkillsCard from "./components/SkillsCard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <InicioCard />
      <ProyectosCard />
      <SkillsCard />
      <ExpCard />
    </div>
  );
}

export default App;

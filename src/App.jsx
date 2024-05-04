import { MantineProvider } from "@mantine/core";
import "./App.css";
import ExpCard from "./components/ExpCard";
import InicioCard from "./components/InicioCard";
import NavBar from "./components/NavBar";
import ProyectosCard from "./components/ProyectosCard";
import SkillsCard from "./components/SkillsCard";
import { Route, Routes } from "react-router-dom";
import ContactCard from "./page/ContactCard";

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <NavBar />
        <InicioCard />
        <ProyectosCard />
        <SkillsCard />
        <ExpCard />
        <Routes>
          <Route path="/contact" element={<ContactCard />} />
        </Routes>
      </div>
    </MantineProvider>
  );
}

export default App;

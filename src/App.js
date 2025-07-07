import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Mail } from "./components/Mail";
import { Projects } from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeProvider } from "./components/isDarkMode";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Mail />
      </div>
    </DarkModeProvider>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import Shell from "./components/Shell";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

import SyringePump from "./pages/projects/SyringePump";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Shell children={<Home />} />} />

                <Route path="/about" element={<Shell children={<About />} />} />
                <Route
                    path="/projects"
                    element={<Shell children={<Projects />} />}
                />
                <Route
                    path="/projects/syringe-pump"
                    element={<Shell children={<SyringePump />} />}
                />
            </Routes>
        </>
    );
}

export default App;

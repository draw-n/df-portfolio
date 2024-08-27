import { Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./App.css";
import Shell from "./components/Shell";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <>
            <Routes>
                <Route
                    path="/df-portfolio"
                    element={<Shell children={<Home />} />}
                />
                <Route
                    path="/df-portfolio/about"
                    element={<Shell children={<About />} />}
                />
                <Route
                    path="/df-portfolio/projects"
                    element={<Shell children={<Projects />} />}
                />
            </Routes>
        </>
    );
}

export default App;

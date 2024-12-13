import { Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import "./App.css";
import Shell from "./components/Shell";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

import SyringePump from "./pages/projects/syringe-pump/SyringePump";
import MicrofluidicDevice from "./pages/projects/microfluidic-device/MicrofluidicDevice";
import MultimaterialPliers from "./pages/projects/multimaterial-pliers/MultimaterialPliers";
import BikePhoneHolder from "./pages/projects/bike-phone-holder/BikePhoneHolder";
import SkateboardTruck from "./pages/projects/skateboard-truck/SkateboardTruck";

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
                <Route
                    path="/projects/microfluidic-device"
                    element={<Shell children={<MicrofluidicDevice />} />}
                />
                <Route
                    path="/projects/multimaterial-pliers"
                    element={<Shell children={<MultimaterialPliers />} />}
                />
                <Route
                    path="/projects/bike-phone-holder"
                    element={<Shell children={<BikePhoneHolder />} />}
                />
                <Route
                    path="/projects/skateboard-truck"
                    element={<Shell children={<SkateboardTruck />} />}
                />
            </Routes>
        </>
    );
}

export default App;

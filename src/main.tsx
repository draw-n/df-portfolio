import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider>
            <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL || "/"}>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </StrictMode>
);

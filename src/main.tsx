import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import App from "./App";
import Navbar from "./components/layout/Navbar";
import { LangProvider } from "./i18n/LangProvider";
import { LangSwitcher } from "./hook/LangSwitch";
/* import Footer from "./components/layout/Footer";
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LangProvider>
      <BrowserRouter>
        <div className="bg-bg-primary min-h-screen">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>

          <App />

          <div className="fixed bottom-2 right-2 z-50">
            <LangSwitcher />
          </div>
          <div className="fixed bottom-0 left-0 right-0 z-50">
           {/*  <Footer /> */}
          </div>
        </div>
      </BrowserRouter>
    </LangProvider>
  </StrictMode>
);
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/projects/Horecaseek";
import ScrollToTop from "./hook/ScrollToTop";

function App() {
  return (
    <main className="pt-20">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </main>
  );
}

export default App;
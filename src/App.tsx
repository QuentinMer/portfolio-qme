import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
import MyWorks from "./components/sections/MyWorks";
import Skills from "./components/sections/Skills";
import WipBanner from "./components/ui/wipBanner";


function App() {


  return (
    <>
      <div className="min-h-screen m-0 p-0 w-full overflow-y-auto">
      <WipBanner href="#contact" />
        <Header />
        <MyWorks />
        <Skills />
        <Contact/>
      </div>
    </>
  )
}

export default App

import Header from "./components/sections/Header";
import MyWorks from "./components/sections/MyWorks";
import Skills from "./components/sections/Skills";


function App() {


  return (
    <>
      <div className="min-h-screen m-0 p-0 w-full overflow-y-auto">
        <Header />
        <MyWorks />
        <Skills />
      </div>
    </>
  )
}

export default App

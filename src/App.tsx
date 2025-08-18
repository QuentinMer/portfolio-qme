import { useState } from "react";
import Header from "./components/sections/Header";
import Intro from "./components/sections/Intro";
import About from "./components/sections/About";
import MyWorks from "./components/sections/MyWorks";
import Loading from "./components/ui/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
    
      <div className="min-h-screen bg-svg m-0 p-0 w-full overflow-y-auto">
        <Header/>
        <Intro/>
        <About/>
        <MyWorks/>
      </div>
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
    </>
  )
}

export default App



import BackgroundSlider from "./components/BackgroundSlider";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import { NewsProvider } from "./Context/NewsContext";
// import { RightProvider } from "./RightContext/RightContext";

function App() {
  return (
   
 <NewsProvider>
<Navbar/>
<BackgroundSlider/>
<Home/>
 </NewsProvider>
    

  );
}

export default App;

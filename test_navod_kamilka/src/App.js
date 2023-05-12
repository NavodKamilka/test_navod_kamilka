import { Routes, Route ,BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/About";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/" element={ <LandingPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

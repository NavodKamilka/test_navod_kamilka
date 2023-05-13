import { Routes, Route ,BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/About";
import ServicePage from "./Pages/Service";
import TestiMonials from "./Pages/TestiMonials";
import Portfolio from "./Pages/Portfolio";
import Contacts from "./Pages/Contacts";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={ <AboutPage/> } />
          <Route path="/services" element={ <ServicePage/> } />
          <Route path="/testiMonials" element={ <TestiMonials/> } />
          <Route path="/portfolio" element={ <Portfolio/> } />
          <Route path="/contacts" element={ <Contacts/> } />
          <Route path="/" element={ <LandingPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Join from "./Components/Join/Join";
import Plans from "./Components/Plans/Plans";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Testmonials from "./Components/Testmonials/Testmonials";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Hero/>
      <Programs/>
      <Plans/>
      <Reasons/>
      <Testmonials/>
      <Join/>
        {/* <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/whyus" element={<Reasons />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/testmonials" element={<Testmonials />} />
          <Route path="/join" element={<Join />} />
        </Routes> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

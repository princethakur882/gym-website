import './App.css';
import Hero from './Components/Hero/Hero'
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testmonials from './Components/Testmonials/Testmonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testmonials/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Itam from './pages/Itam';
import DataDispo from './pages/DataDispo';
import Ewaste from './pages/Ewaste';
import SmartHands from './pages/SmartHands';
import Logistics from './pages/Logistics';
import Sales from './pages/Sales';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div style={{background: '', margin:0}}>
      <Navbar style={{zIndex: '55'}}/>

        <Routes>

          <Route
            path="/"
            element={<Home style={{zIndex: '4'}}/>}
          />

          <Route
            path="/itam"
            element={<Itam style={{zIndex: '4'}}/>}
          />

          <Route
            path="/data-destruction"
            element={<DataDispo style={{zIndex: '4'}}/>}
          />

          <Route
            path="/ewaste"
            element={<Ewaste style={{zIndex: '4'}}/>}
          />

          <Route
            path="/smarthands"
            element={<SmartHands style={{zIndex: '4'}}/>}
          />

          <Route
            path="/logistics"
            element={<Logistics style={{zIndex: '4'}}/>}
          />

          <Route
            path="/sales"
            element={<Sales style={{zIndex: '4'}}/>}
          />

          <Route
            path="/about"
            element={<About style={{zIndex: '4'}}/>}
          />

          <Route
            path="/contact"
            element={<Contact style={{zIndex: '4'}}/>}
          />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;

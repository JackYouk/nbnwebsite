import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: '', margin:0}}>
      <Navbar style={{zIndex: '55'}}/>

        <Routes>
          <Route
            path="/"
            element={<Home style={{zIndex: '4'}}/>}
          />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;

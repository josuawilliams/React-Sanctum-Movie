import './App.css';
import LandingPage from './views/LandingPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import DetailPage from './views/DetailPage';
import AboutMe from './views/AboutPage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:slug" element={<DetailPage/>} />
        <Route path="/about" element={<AboutMe/>} />
      </Routes>
    </div>
    </>
  );
}

export default App;

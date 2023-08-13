import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common/styles.css'
import Intro from './pages/Intro';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PreIntro from "./pages/PreIntro";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<PreIntro />}>
      </Route>
      <Route path="/login" element={<Intro />}>
      </Route>
      <Route path="/home" element = {<Home />}>
      </Route>
      <Route path="/dashboard" element = {<Dashboard />}>
      </Route>
    </Routes>
    <div className="beta">
        <p>Beta Version</p>
        <p style={{fontWeight:'200', fontSize:'12px'}}>Under Development</p>
      </div>
  </BrowserRouter>
  );
}

export default App;

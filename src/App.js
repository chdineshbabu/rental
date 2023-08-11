import { BrowserRouter, Routes, Route } from "react-router-dom";
import './common/styles.css'
import Intro from './pages/Intro';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />}>
      </Route>
      <Route path="/home" element = {<Home />}>
      </Route>
      <Route path="/dashboard" element = {<Dashboard />}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

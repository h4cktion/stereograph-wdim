import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projets from "./components/projects/Projects";
import Home from "./components/home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

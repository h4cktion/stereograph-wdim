import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import { QueryClient, QueryClientProvider } from "react-query";
import Project from "./components/project/Project";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projet/:id" element={<Project />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;

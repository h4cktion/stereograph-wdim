import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/home/Home";
import Projects from "@/components/projects/Projects";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;

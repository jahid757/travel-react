import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Blog from "./pages/Blog/Index";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/blog" element={<Blog />} />

        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

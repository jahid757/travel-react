import "./App.css";
// import external css






import { Route, BrowserRouter, Routes } from "react-router-dom";


import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Blog from "./pages/Blog/Index";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Terms from "./pages/Terms";
import TourSingle from "./pages/Tour_Single";
import BlogSingle from "./pages/Blog_Single";
import Holiday from "./pages/Holiday";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/holiday" element={<Holiday />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/tour-single/:id" element={<TourSingle />} />
        <Route path="/blog-single/:id" element={<BlogSingle />} />

        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

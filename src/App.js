import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";


import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />



        {/* <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

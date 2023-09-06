import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./page/Home/index.jsx";
import Inscription from "./page/inscription/Inscription"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
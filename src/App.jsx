import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import Home from "./page/Home"
import Test from "./page/Test"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
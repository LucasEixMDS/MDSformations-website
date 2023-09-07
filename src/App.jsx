import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Layout from "./Layout";
import Home from "./page/Home/index.jsx";
import Inscription from "./components/inscription/Inscription"
import Documentation from "./components/documentation/Documentation"
import ArticlePage from "./page/Article/Article"
import FormationPage from "./page/Formation/Formation.jsx";


const App = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/articles/:articleTitle" element={<ArticlePage />} />
        <Route path="/:formationLink" element={<FormationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription /> } />
          <Route path="/documentation" element={<Documentation /> } />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import Contatti from "./Contatti";
import Navbar from "./Navbar";
import Layout from "./Layot";

// Componente per gestire il titolo
function TitleHandler() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Nuova Naturopatia";
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <TitleHandler />
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
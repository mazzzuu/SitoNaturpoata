import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contatti from "./Contatti";
import Navbar from "./Navbar";
import Layout from "./Layot";


function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

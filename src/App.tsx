import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contatti from "./Contatti";
import Navbar from "./Navbar";
// import Login from "./Login";
// import Eventi from "./Eventi";
import Layout from "./Layot";
// import EditPage from "./EditPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* <Route path="/admin" element={<Login />} /> */}
          {/* <Route path="/eventi" element={<Eventi />} /> */}
          {/* <Route path="/edit-event/:id" element={<EditPage />} />  */}
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

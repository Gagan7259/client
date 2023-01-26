import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import Admin from "./components/Admin";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/students" element={<Student/>}/>
        <Route path="/admin" element={<Admin/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

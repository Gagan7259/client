import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/students" element={<Student/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

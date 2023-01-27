import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import Admin from "./components/Admin";
import StudentList from "./components/StudentList";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/students" element={<Student/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/studentlist" element={<StudentList/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

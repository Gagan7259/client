import Navbar from "./components/Navbar";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from "./components/Student";
import Admin from "./components/Admin";
import StudentList from "./components/StudentList";
import Edit from "./components/Edit";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/students" element={<Student/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/studentlist" element={<StudentList/>}/>
        <Route path="/editl" element={<Edit/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;

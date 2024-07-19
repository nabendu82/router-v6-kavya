import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import AllCourses from './components/AllCourses';
import Bundles from './components/Bundles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="allcourses" element={<AllCourses />} />
          <Route path="bundles" element={<Bundles />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

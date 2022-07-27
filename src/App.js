import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddFighter from './Components/AddFighter'
import Home from './Components/Home'

function App() {


  return (
    <Router>
      <div className="App">
        <nav className="navbar">
        <h1>UFC Top 10</h1>
          <Link className="navLinks" to="/">Home</Link>
          <Link className="navLinks" to="/addFighter">Add a Fighter</Link>
        </nav>
      <Routes>
      <Route path="/" element = {<Home/>} />
        <Route path="/addFighter" element = {<AddFighter />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

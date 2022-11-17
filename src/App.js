import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddFighter from './Components/AddFighter'
import Home from './Components/Home'
import Selection from './Components/Selection'
import UpdateFighters from './Components/UpdateFighters';

function App() {


  return (
    <Router>
      <div className="App">
        <nav className="navbar">
        <h1>UFC Top 10</h1>
          <Link className="navLinks" to="/">Home</Link>
          <Link className="navLinks" to="/top10">Top 10</Link>
          <Link className="navLinks" to="/addFighter">Add a Fighter</Link>
          <Link className="navLinks" to="/updateFighters">Update Fighters</Link>
        </nav>
      <Routes>
      <Route path="/" element = {<Home/>} />
        <Route path="Top10" element={<Selection />} />
        <Route path="/addFighter" element = {<AddFighter />} />
        <Route path="/updateFighters" element ={<UpdateFighters />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

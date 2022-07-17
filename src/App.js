import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddFighter from './Components/AddFighter'
import Home from './Components/Home'

function App() {


  return (
    <Router>
      <div className="App">
        <h1>UFC APP</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/addFighter">Add a Fighter</Link>
        </nav>
        <nav>

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

import logo from './levvel-logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Author from './Pages/Author';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about/:authorID" element={<Author/>}/>
      </Routes>
    </Router>
  )
}

export default App;

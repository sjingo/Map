import React,{Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './views/Map'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function Home(){
  return <>
  <h2>Home</h2>
  <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
        </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
        </a>
        </>
}


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/map/">Map</Link>
      <Link to="/">Home</Link>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Map/" component={GMap}></Route>
      </header>
    </div>
    </Router>
  );
}

export default App;

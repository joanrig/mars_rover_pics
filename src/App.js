import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Search from './components/Search'
import RoversContainer from './Rovers/RoversContainer'
import About from './components/About'




function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/rovers' component={RoversContainer} />
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
    </>
  );
}

export default App

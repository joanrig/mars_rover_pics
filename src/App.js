import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import NavCam from './components/NavCam'




function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/navcam' component={NavCam} />
        </div>
      </Router>
    </>
  );
}

export default App

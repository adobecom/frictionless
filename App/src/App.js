import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Verbs from './components/Verbs';
import VerbDetail from './components/VerbDetail';
import './components/Verbs.css';

function App() {
  return (

    <Router>
      <div className="Salmon-bg"></div>
      <div className="App">
        <header>
        </header>
      <Routes>
        <Route path="/" element={<Home/>} forceRefresh={true}/>
        <Route path='/:verbName' element={<VerbDetail/>}/>
      </Routes>
      </div>
    </Router>
  );
}

/***
 * Displays a grid of current adventures
 */
function Home() {

  return (
    <div className="Home">
      <h2>Make great work happen from anywhere</h2>
      <Verbs />
  </div>
  );
}

export default App;

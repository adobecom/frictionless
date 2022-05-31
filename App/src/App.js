import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Verbs from './components/Verbs';
import VerbDetail from './components/VerbDetail';
import SignIn from './components/SignIn';
import Foot from './components/Foot';

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
      <SignIn />
      <h2 className="home-copy">Make great work happen from anywhere</h2>
      <p className="home-copy">Adobe invented the PDF format. So when you use our online PDF converter tools, you can trust you’ll get the highest quality results.</p>
      <Verbs />
      <Foot />
  </div>
  );
}

export default App;

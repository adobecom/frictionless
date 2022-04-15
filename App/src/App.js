import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="Salmon-bg"></div>
      <div className="App">
        <header>
        </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
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
      <h2>Make great work happen from anywhere!</h2>
  </div>
  );
}

export default App;

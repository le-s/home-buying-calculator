import React from 'react';
import './App.css';

import NavBar from './components/navbar/nav';
import Calc from './components/calculator/calc';

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Calc />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import NavBar from './components/navbar/nav';
import Calc from './components/calculator/calc';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Calc />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

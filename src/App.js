import React from 'react';
import './App.css';

import NavBar from './components/navbar/nav';
import Calc from './components/calculator/calc_wrapper';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Calc />
      <footer>
        <Footer />
      </footer>
      </main>
    </div>
  );
}

export default App;

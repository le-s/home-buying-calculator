import React from 'react';

import './App.scss';
import'./stylesheets/nav.scss'
import'./stylesheets/calc.scss'
import'./stylesheets/result.scss'
import'./stylesheets/footer.scss'

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

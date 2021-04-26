import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList.js';
import images from './Creatures.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />


        <main>
          <CreatureList creatures={images} />

        </main>


        <Footer />

      </div>
    );
  }

}

export default App;

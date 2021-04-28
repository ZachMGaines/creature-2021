import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureList from './CreatureList.js';
import CreaturesData from './Creatures-Data.js';
import CreatureSearch from './CreatureSearch';
import './CreatureSearch.css';

const creatureTypes = [...new Set(CreaturesData.map(c => c.horns))];

class App extends Component {
  state = {
    creatures: CreaturesData
  }
  handleSearch = ({ nameFilter, sortField, typeFilter }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = CreaturesData
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
  }



  render() {
    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />

        <CreatureSearch horns={creatureTypes} onSearch={this.handleSearch} />

        <main>

          <CreatureList creatures={creatures} />

        </main>


        <Footer />

      </div>
    );
  }

}

export default App;

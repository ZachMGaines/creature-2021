import React, { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    typeFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }


  render() {
    const { nameFilter, sortField, typeFilter } = this.state;
    const { horns } = this.props;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input
          title="nameFilter"
          value={nameFilter}
          onChange={this.handleNameChange} />

        <select
          title="sortField"
          value={sortField}
          onChange={this.handleSearchChange}>
          <option value="">sort...</option>
          <option value="title">by name</option>
          <option value="horns">horns</option>
        </select>

        <select
          title="typeFilter"
          value={typeFilter}
          onChange={this.handleTypeChange}>
          <option value="">All</option>
          {horns.map(horn => (
            <option key={horn} value={horn}>{horn}</option>
          ))}
        </select>
        <button>C</button>
      </form>

    );
  }
}

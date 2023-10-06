import React, { Component } from 'react';
import './States.css';

class States extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm } = this.state;
    const stateNames = models.states(); // Retrieve state names from models.states()

    const filteredStates = stateNames.filter((state) =>
      state.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div>
        <h1>States View</h1>
        <input
          type="text"
          placeholder="Enter a substring..."
          value={searchTerm}
          onChange={this.handleSearchChange}
        />
        {searchTerm && (
          <div>
            <p>Filtering by: {searchTerm}</p>
          </div>
        )}
        <ul>
          {filteredStates.length > 0 ? (
            filteredStates.map((state) => (
              <li key={state}>{state}</li>
            ))
          ) : (
            <p>No matching states found.</p>
          )}
        </ul>
      </div>
    );
  }
}

export default States;

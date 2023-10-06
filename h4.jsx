import React, { Component } from 'react';
import Example from './Example';
import States from './States';

class P4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExample: true,
    };
  }

  handleSwitchView = () => {
    this.setState((prevState) => ({
      showExample: !prevState.showExample,
    }));
  };

  render() {
    const { showExample } = this.state;

    return (
      <div>
        <h1>Problem 4: Dynamic View Switching</h1>
        <button onClick={this.handleSwitchView}>
          {showExample ? 'Switch to States' : 'Switch to Example'}
        </button>
        {showExample ? <Example /> : <States />}
      </div>
    );
  }
}

export default P4;

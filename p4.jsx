import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example'
import Header from './components/header/Header';

class Eg extends Component {
    render() {
        return (
            <div>
                <h1>Example View</h1>
                <Example />
            </div>
        );
    }
}

class State extends Component {
    render() {
        return (
            <div>
                <States />
            </div>
        );
    }
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            showExample: true,
        };
    }

    toggleView = () => {
        this.setState((prevState) => ({
            showExample: !prevState.showExample,
        }));
    };

    render() {
        return (
            <div>
                <Header/>
                <button onClick={this.toggleView}>
                    {this.state.showExample ? 'Switch to States' : 'Switch to Example'}
                </button>
                {this.state.showExample ? <Eg /> : <State />}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

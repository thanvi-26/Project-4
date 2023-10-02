import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      images: [
        './components/header/S11.png',
        './components/header/S9.png',
        './components/header/S3.png',
        './components/header/S4.png',
        './components/header/S7.png',
        './components/header/S10.png'
      ]
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.showNextSlide, 1500); // Change slide every 1.5 seconds (1500 milliseconds)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  showNextSlide = () => {
    const { currentSlide, images } = this.state;
    this.setState({
      currentSlide: (currentSlide + 1) % images.length
    });
  };

  // eslint-disable-next-line class-methods-use-this
  handleButtonClick = (url) => {
    window.open(url, '_blank'); // Open the URL in a new tab/window
  };

  render() {
    const { currentSlide, images } = this.state;
    const slideStyle = {
      backgroundImage: `url(${images[currentSlide]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '200px',
      color: 'black', 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div className="header" style={slideStyle}>
        {/* Add your header content here */}
        <h1>TECH BUDDIES - WEEK04</h1>
        <div>
          <button onClick={() => this.handleButtonClick('getting-started.html')}>Getting Started</button>
          <button onClick={() => this.handleButtonClick('p2.html')}>p2.html</button>
          <button onClick={() => this.handleButtonClick('p4.html')}>p4.html</button>
          <button onClick={() => this.handleButtonClick('p5.html')}>p5.html</button>
          {/* Add more buttons as needed */}
        </div>
      </div>
    );
  }
}

export default Header;

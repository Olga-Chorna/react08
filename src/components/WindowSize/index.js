import React, { Component } from 'react';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }
  handleWindowSize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    })
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSize);
  }
  render() {
    return (
      <div>
        <p>width:{window.innerWidth}</p>
        <p>heigth:{window.innerHeight}</p>
      </div>
    );
  }
}

export default WindowSize;

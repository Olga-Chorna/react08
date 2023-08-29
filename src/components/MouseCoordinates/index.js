import React, { Component } from "react";

class MouseCoordinates extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  mouseMoveHandler = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.mouseMoveHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  render() {
    const { x, y } = this.state;

    return (
      
      <div>
        Mouse Coordinates: x = {x}, y={y}
      </div>
    )
  }
}

export default MouseCoordinates;
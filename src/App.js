import { Component } from 'react';
import './App.css';
import MouseCoordinates from './components/MouseCoordinates';
// import MouseCoordinates from './components/MCordFunctional';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }
  setVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    return (
      <MouseCoordinates/>
    );
  }
}

export default App;

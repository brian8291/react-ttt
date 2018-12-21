import React from 'react';
import Board from './Board';
import '../index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      playerTurn: 'O',
      placeTracker: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    }
    this.markSquare = this.markSquare.bind(this);
  }
  
  markSquare = (num) => {
    const stateCopy = Object.assign({}, this.state)
    let placeTracker = stateCopy.placeTracker;
    if (this.state.placeTracker[num] === ' ' && this.state.playerTurn === 'O') {
      placeTracker[num] = 'O';
      stateCopy.playerTurn = 'X';
      this.setState(stateCopy);
    } else if (this.state.placeTracker[num] === ' ' && this.state.playerTurn === 'X') {
      placeTracker[num] = 'X';
      stateCopy.playerTurn = 'O';
      this.setState(stateCopy);
    }
  }
  render() {
    return (
      <div>
        <Board markSquare={this.markSquare} placeTracker={this.state.placeTracker} />
      </div>
    );
  }
}

export default App;

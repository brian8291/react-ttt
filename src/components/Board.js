import React from 'react';
import Box from './Box';

const Board = (props) => {
  const { markSquare, placeTracker } = props;
  const boxes = placeTracker.map((sq, i) => <Box key={`box${i}`} markSquare={markSquare} position={i} status={sq} />)
  console.log(boxes);
  return(
      <div className="board">
        {boxes}
      </div>
    )
  }


export default Board;
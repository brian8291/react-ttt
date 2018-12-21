import React from 'react'; 

const Box = (props) => {
  const { status, position, markSquare} = props;
  return(
    <button onClick={() => markSquare(position)}>{status}</button>
  )
}

export default Box

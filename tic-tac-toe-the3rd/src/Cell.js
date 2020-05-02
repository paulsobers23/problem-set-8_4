import React from 'react';

function Cells(props) {
  // render either X or O
  return <button className="button" onClick={props.click}>{props.value}</button>;
}

export default Cells;
import React from 'react';

function TableCell(props) {
  return (
    <td style= {{width: "100px", height: "50px", border: "black solid"}} onMouseDown={props.mouseDown} onMouseEnter={props.mouseEnter} onMouseUp={props.mouseUp} ></td>
  );
}

export default TableCell;
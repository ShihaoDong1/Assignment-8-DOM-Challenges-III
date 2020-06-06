import React from 'react';

function TableCell(props) {
  return (
    <td style= {{width: "100px", height: "50px", border: "black solid"}} onClick={props.assignColor}></td>
  );
}

export default TableCell;
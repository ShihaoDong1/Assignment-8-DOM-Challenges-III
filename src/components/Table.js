import React, { Component } from 'react';
import TableCell from './TableCell.js';

class Table extends Component {
  constructor(){
    super();
      this.state= {
        rowNumber: 1,
        columnNumber: 1,
        color: "red",
        check: false,
      };
  }

  addRow = (event) => {
    this.setState({rowNumber: event.rowNumber + 1});
  }

  addColumn = (event) => {
    this.setState({columnNumber: event.columnNumber + 1});
  }

  deleteRow = (event) => {
    if (event.rowNumber === 1) {
      return alert("Row cannot be less than one");
    }
    else {
      this.setState({rowNumber: event.rowNumber - 1});
    }
  }

  deleteColumn = (event) => {
    if (event.columnNumber === 1) {
      return alert("Column cannot be less than one");
    }
    else {
      this.setState({columnNumber: event.columnNumber - 1});
    }
  }

  changeColor = (event) => {
    this.setState({color: event.target.value});
  }

  assignColor = (event) => {
    event.target.style.backgroundColor = this.state.color;
  }

  mouseDown = (event) => {
    event.target.style.backgroundColor = this.state.color;
    this.setState({checker: true});
  }

  mouseUp = (event) => {
    this.setState({checker: false});
  }

  mouseEnter = (event) => {
    if (this.state.checker === true){
      event.target.style.backgroundColor = this.state.color;
    }
  }


  fillAllColor = (event) => {
    let filler = document.getElementsByTagName("td");
    for (let i = 0; i < filler.length; i++){
      filler[i].style.backgroundColor = this.state.color;
    }
  }

  fillMissingColor = (event) => {
    let filler = document.getElementsByTagName("td");
    for (let i = 0; i < filler.length; i++){
      if(filler[i].style.backgroundColor === ""){
        filler[i].style.backgroundColor = this.state.color;
      }
    }
  }

  clearColor = (event) => {
    let filler = document.getElementsByTagName("td");
    for (let i = 0; i < filler.length; i++){
      filler[i].style.backgroundColor = null;
    }
  }

  render() {

    let myTableRow = [];
    for(let i = 0; i < this.state.rowNumber; i++){
      let myTableColumn = [];
      for(let j = 0; j < this.state.columnNumber; j++){
        myTableColumn.push(<TableCell assignColor={this.assignColor}/>);
      }
      myTableRow.push(<tr>{myTableColumn}</tr>)
    }

      return (
        <div>
        <button onClick={() => this.addRow(this.state)}>
          Add Row
        </button>
        <button onClick={() => this.addColumn(this.state)}>
          Add Column
        </button>
        <button onClick={() => this.deleteRow(this.state)}>
          Delete Row
        </button>
        <button onClick={() => this.deleteColumn(this.state)}>
          Delete Column
        </button>
        <button onClick={() => this.fillAllColor(this.state)}>
          Fill with colors
        </button>
        <button onClick={() => this.fillMissingColor(this.state)}>
          Fill missing with colors
        </button>
        <button onClick={() => this.clearColor(this.state)}>
          Clear colors
        </button>
        <select onClick={this.changeColor}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <table className= "myTable">
          {myTableRow}
        </table>
        </div>
      );}
}

export default Table;
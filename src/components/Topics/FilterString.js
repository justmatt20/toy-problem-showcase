import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [],
            userInput: '',
            filteredArray: [],
            employees: [
           "Tom", "John", "Mark", "Tina", "Jenny", "Sarah", "Sam"
            ]
        }
    }

handleChange (val) {
    this.setState({userInput: val});
    console.log(val)
}

filterEmployees = () =>  {
    const employees =  this.state.employees;
    const filteredEmployees = [];
    const input = this.state.userInput;


for (let i=0; i<employees.length; i++) {
    if( employees[i].includes(input)) {
        filteredEmployees.push(employees[i]);
    }return this.setState({filterEmployees: filteredEmployees});
}


}

render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Employees: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Employees: { JSON.stringify(this.state.filteredEmployees, null, 10) } </span>
      </div>
    )
  }
}

export default FilterString;
import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
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

filterEmployees = (userInput) =>  {
    const employees =  this.state.employees;
    const filteredEmployees = [];
    


for (let i=0; i<employees.length; i++) {
    if (employees[i].includes(userInput)) {
        filteredEmployees.push(employees[i]);
    }
}
    return this.setState({filteredArray: filteredEmployees});
}

render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Employees: { JSON.stringify(this.state.employees, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Employees: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
      </div>
    )
  }
}

export default FilterString;
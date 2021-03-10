import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [],
            userInput: '',
            filteredArray: [],
            employees: [
            {
                name: 'Jenny',
                age: 35,
            },
            {
                name: 'Jimmy',
                age: 32,
            },
            {
                name: 'Sammy',
                age: 47,
            },
            {
                name: 'Sonny',
                age:43,
            },
            ]
        }
    }

handleChange (val) {
    this.state({userInput: val});
}

filterEmployees(prop) {
    let employees =  this.state.employees;
    let filteredEmployees = []


for (let i=0; i<employees.length; i++) {
    if( employees[i].hasOwnPorperty(prop)) {
        filteredEmployees.push(employees[i]);
    }
}

this.setState({filterEmployees: filteredEmployees});
}

    render () {
        return (
<div className="puzzleBox filterObjectPB">

    <h4>Filter Object</h4>
    <span className="puzzleText">Original: { JSON.stringify(this.state.employees, null, 10)}</span>
    <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
    <button className="confirmationButton" onClick={(e) => {this.buttonClick(this.state.userInput)}}>Filter</button>
    <span className="resultsBox filterObjectRB">Filtered: {this.state.filteredEmployees, null, 10}</span>
</div>
        )
    }
}

export default FilterObject;
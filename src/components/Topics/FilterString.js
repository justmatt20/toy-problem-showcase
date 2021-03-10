import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: [''],
            userInput: '',
            filteredArray: [],
            names: [
                "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"
            ]
        }
    }
    render () {
        return (
<div className="puzzleBox filterStringPB">
    <h4>Filter String</h4>
    <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10)}</span>
    <input className="inputLine"/>
    <button className="confirmationButton">Filter</button>
    <span className="resultsBox filterStringRB">Filtered Names: {this.state.userInput}</span>
    
</div>
        )
    }
}

export default FilterString;
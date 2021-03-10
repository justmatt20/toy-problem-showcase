import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }
    render () {
        return (
<div className="puzzleBox sumPB">
    <h4>Sum</h4>
    <input className="inputLine"/>
    <button className="confirmationButton">Add</button>
    <span className="resultsBox">Sum: {this.state.sum}</span>
    
</div>
        )
    }
}


export default Sum;
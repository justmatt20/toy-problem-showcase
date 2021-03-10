import React, {Component} from 'react';



class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [ ],
            oddArray: [ ],
            userInput: '',
        }
    };

    buttonClick = (userInput) => {
        const num = userInput.split(',');
        const evens = [];
        const odds = [];

        for (let i=0; i<num.length; i++) {
            if (num[i] % 2 === 0) {
                evens.push(parseInt(num[i], 10) );
            } else {
                odds.push(parseInt(num[i], 10));
            }
        }
        
        this.setState({evenArray: evens, oddArray: odds});
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }


    render () {
        return (
    <div className="puzzleBox evenAndOddPB">

        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
        <button className="confirmationButton" onClick={() => {this.buttonClick(this.state.userInput)}}>Split</button>
        <span className="resultsBox">Evens: {this.state.evenArray.map}</span>
        <span className="resultsBox">Odds:{this.state.oddArray.map}</span>
    
</div>
        )
    }
}

export default EvenAndOdd;
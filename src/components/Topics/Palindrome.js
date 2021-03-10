import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

handleChange(val) {
    this.setState({userInput: val});
}

isPalindrome(userInput) {
    const backText = this.userInput.toLowercase().split('').reverse().join('');
    return userInput === backText;
}


    render () {
        return (
<div className="puzzleBox palindromePB">
    <h4>Palindrome</h4>
    <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
    <button className="confirmationButton" onClick={() => this.isPalindrome(this.state.userInput)}>Check</button>
    <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
    
</div>
        )
    }
}

export default Palindrome;
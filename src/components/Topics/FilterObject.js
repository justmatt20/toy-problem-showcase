import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [""],
      userInput: "",
      filteredArray: [],
      names: 
      [
        {name: "James", age: 22},
        {name:"Jessica", age: 67},
        {name:"Melody",age: 24},
        {name:"Tyler", age: 86},
        {name:"Blake", age: 54},
        {name:"Jennifer", age: 35},
        {name:"Mark", age: 46},
        {name:"Maddy", age: 19} 
      ],
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
    console.log(val)
  }

  filterNames = ()  => {
    const names = this.state.names;
    const input = this.state.userInput;
    const inputName = names.map(name => Object.values(name)[0]);
    // console.log(inputName)
    const inputAge = names.map(age => Object.values(age)[1]);
    // console.log(inputAge)

    if (input === 'names') {
        return this.setState({filteredArray: inputName})
        // console.log(this.filterNames)
    }else{
        return this.setState({filteredArray: inputAge})
    }

  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter Object: </h4>
        <p>Type in 'names' or 'age' to filter the object.</p>
        <span className="puzzleText">{" "}Names: {JSON.stringify(this.state.names, null, 10)}{" "}</span>
        <input className="inputLine"onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton"onClick={this.filterNames}>
          {" "}Filter{" "}
          </button>
        <span className="resultsBox filterStringRB">{" "}Filtered: {this.state.filteredArray}
        </span>
      </div>
    );
  }
}

export default FilterObject;

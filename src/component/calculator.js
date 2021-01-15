import React, { Component } from "react";
import "../style/style.css";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: ""
    };
  }
  render() {
    return (
      <div className="calc">
        <h1>MY CALCULATOR</h1>
        <div>
          <span className="input">input1</span>
          <input
            size="15"
            onChange={(e) => {
              this.setState({ num1: e.target.value });
            }}
            value={this.state.num1}
          />
        </div>
        <br></br>
        <div>
          <span className="input">input2</span>
          <input
            size="15"
            onChange={(e) => {
              this.setState({ num2: e.target.value });
            }}
            value={this.state.num2}
          />
        </div>
        <br></br>
        <div>
          <button
            onClick={() =>
              this.setState({
                result: parseInt(this.state.num1) + parseInt(this.state.num2)
              })
            }
          >
            ADD
          </button>
          <button
            onClick={() =>
              this.setState({
                result: parseInt(this.state.num1) - parseInt(this.state.num2)
              })
            }
          >
            SUB
          </button>
          <button
            onClick={() =>
              this.setState({
                result: parseInt(this.state.num1) * parseInt(this.state.num2)
              })
            }
          >
            MULTIPLY
          </button>
          <button
            onClick={() =>
              this.setState({
                result: parseInt(this.state.num1) / parseInt(this.state.num2)
              })
            }
          >
            DIV
          </button>
          <button
            onClick={() =>
              this.setState({
                result: parseInt(this.state.num1) % parseInt(this.state.num2)
              })
            }
          >
            MOD
          </button>
          <button
            onClick={() =>
              this.setState({
                num1: "",
                num2: "",
                result: ""
              })
            }
          >
            CLEAR
          </button>
        </div>
        <br />
        <div>
          <span className="input">result</span>
          <input
            size="15"
            onChange={(e) => {
              this.setState({ result: e.target.value });
            }}
            value={this.state.result}
          />
        </div>
      </div>
    );
  }
}

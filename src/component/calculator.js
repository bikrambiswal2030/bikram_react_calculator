import React, { Component } from "react";
import "../style/style.css";
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: ""
    };
  }

  render() {
    return (
      <div className="calc">
        <div>
          <span>input1</span>
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
          <span>input2</span>
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
              alert(parseInt(this.state.num1) + parseInt(this.state.num2))
            }
          >
            ADD
          </button>
          <button
            onClick={() =>
              alert(parseInt(this.state.num1) - parseInt(this.state.num2))
            }
          >
            SUB
          </button>
          <button
            onClick={() =>
              alert(parseInt(this.state.num1) * parseInt(this.state.num2))
            }
          >
            MULTIPLY
          </button>
          <button
            onClick={() =>
              alert(parseInt(this.state.num1) / parseInt(this.state.num2))
            }
          >
            DIV
          </button>
          <button
            onClick={() =>
              alert(parseInt(this.state.num1) % parseInt(this.state.num2))
            }
          >
            MOD
          </button>
        </div>
      </div>
    );
  }
}

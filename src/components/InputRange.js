import React from "react";
import InputRange from "react-input-range";

class InputTypeRange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1000,
      value2: 0,
      step: [3, 7, 14, 54, 70],
    };
    this.changeStep = () => {
      if (this.state.value > 10000) {
        this.state.value2 = 54;
      } else {
        this.state.value2 = 13;
      }
    };
  }

  render() {
    this.changeStep();
    return (
      <div>
        <InputRange
          maxValue={20000}
          minValue={1000}
          step={1000}
          value={this.state.value}
          onChange={(value) => this.setState({ value })}
        />
        )
        <InputRange
          maxValue={100}
          minValue={0}
          step={1}
          value={this.state.value2}
          onChange={(value2) => this.setState({ value2 })}
        />
      </div>
    );
  }
}
export default InputTypeRange;

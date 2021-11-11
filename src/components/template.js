import React, { useState } from "react";
import InputMask from "react-input-mask";

const Template = () => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (value.endsWith("-") && userInput !== "-" && !value.endsWith("-")) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }

    return {
      value,
      selection,
    };
  };
  return (
    <InputMask
      mask="+380 (99) 999-99-99"
      maskChar={null}
      value={value}
      onChange={onChange}
      required
      beforeMaskedValueChange={beforeMaskedValueChange}
    />
  );
};

export default Template;

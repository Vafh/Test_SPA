import React, { useState } from "react";
import InputRange from "react-input-range";
const InputTypeRange = () => {
  const [valueFirst, setValueFirst] = useState(1000);
  const [valueSecond, setValueSecond] = useState(0);
  //   const changeStep = () => {
  //     if (valueFirst > 10000) {
  //       setValueSecond((val) => (val = 54));
  //     } else {
  //       setValueSecond(14);
  //     }
  //   };
  return (
    <div>
      <InputRange
        maxValue={20000}
        minValue={1000}
        step={1000}
        value={valueFirst}
        onChange={(value) => {
          setValueFirst(value);
          //   changeStep();
        }}
      />

      <InputRange
        maxValue={100}
        minValue={0}
        step={1}
        value={valueSecond}
        onChange={(value) => () => {
          setValueSecond(value);
          //   changeStep();
        }}
      />
    </div>
  );
};

export default InputTypeRange;

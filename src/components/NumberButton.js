// import React from "react";

// const ButtonName = ({ buttonValue }) => {
//   return <button type="button">{buttonValue}</button>;
// };

// export default ButtonName;

import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const NumberButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default NumberButton;

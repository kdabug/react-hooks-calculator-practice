import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const NegativeButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleToggleNegative()}>
      pos/neg
    </button>
  );
};

export default NegativeButton;

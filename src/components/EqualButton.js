import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;

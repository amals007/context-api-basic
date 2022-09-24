import React, { useContext } from "react";
import { countContext } from "../Context";
import Button from "./Button";
const DisplayCount = () => {
  const { count } = useContext(countContext)
  return (
    <div>
      {count}
      <Button />
    </div>
  );
};

export default DisplayCount;

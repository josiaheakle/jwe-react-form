import * as React from "react";

import * as css from "./Inputs.module.css";

interface InputErrorsProps {
  errors: Array<string>;
}

export const InputErrors: React.FC<InputErrorsProps> = ({ errors }) => {
  const listStyles: React.CSSProperties = {
    listStyleType: "none",
    color: "red",
    padding: "0 0 0 1rem",
    margin: 0,
  };

  return (
    <ul style={listStyles}>
      {errors.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

import * as React from "react";

import * as css from "./Inputs.module.css";

interface InputErrorsProps {
  errors: Array<string>;
}

export const InputErrors: React.FC<InputErrorsProps> = ({ errors }) => {
  return (
    <ul className={`${css.InputErrors}`}>
      {errors.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  );
};

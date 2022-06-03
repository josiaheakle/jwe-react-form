import * as React from "react";

import * as css from "./Inputs.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={`${css.Button}  ${className || ""}`} {...props}></button>
  );
};

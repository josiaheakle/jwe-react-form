import * as React from "react";

import * as css from "./Inputs.module.css";

interface TextAreaInputProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  errors?: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({
  id,
  label,
  errors,
  onChange,
}) => {
  return <div className={`${css.TextAreaContainer}`}></div>;
};

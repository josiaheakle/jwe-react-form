import * as React from "react";
import { useInput, useIsInputFocused } from "../../../../hooks/InputHooks";
import { InputErrors } from "./InputErrors";

import * as css from "./Inputs.module.css";

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errors?: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, errors, onChange, ...props }) => {
  const { isFocused, onInputChange, setIsFocused } = useIsInputFocused();

  const onChangeCompiled = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    onChange(e);
  };

  return (
    <div className={`${css.TextInputContainer} ${isFocused ? css.focus : ""} `}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChangeCompiled}
        {...props}
      />
      {errors ? <InputErrors errors={errors} /> : null}
    </div>
  );
};

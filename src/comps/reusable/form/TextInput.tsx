import * as React from "react";

import * as css from "./Form.module.css";

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errors?: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, errors, onChange, ...props }) => {
  const [isEmpty, setIsEmtpy] = React.useState<boolean>(true);
  const [isFocus, setIsFocus] = React.useState<boolean>(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmtpy(!(e.target.value.length > 0));
    onChange(e);
  };

  return (
    <div className={`${css.TextInputContainer} ${isFocus || !isEmpty ? css.focus : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onInputChange}
        {...props}
      />
      {errors ? (
        <ul className={`${css.InputErrors}`}>
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

import * as React from "react";
import { useInput, useIsInputFocused } from "../../../../hooks/InputHooks";
import { InputErrors } from "./InputErrors";

import * as css from "./Inputs.module.css";

export interface TextInputProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  errors?: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  //styles
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  errors,
  onChange,
  backgroundColor,
  borderColor,
  textColor,
  ...props
}) => {
  const { isFocused, onInputChange, setIsFocused } = useIsInputFocused();
  const [isHover, setIsHover] = React.useState(false);

  const onChangeCombined = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e);
    onChange(e);
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "12rem",
    margin: "0.4rem 0",
  };

  let labelStyles: React.CSSProperties = {
    position: "absolute",
    top: "0.3rem",
    left: "0.8rem",
    padding: "0 0.25rem",
    opacity: "0.8",
    pointerEvents: "none",
    color: textColor ? textColor : "black",
    transition:
      "top 250ms, left 250ms, font-size 250ms, font-weight 250ms, opacity 250ms",
  };
  labelStyles = isFocused
    ? {
        ...labelStyles,
        backgroundColor: backgroundColor ? backgroundColor : "white",
        opacity: 1,
        fontWeight: "bold",
        fontSize: "0.7rem",
        top: "-0.5rem",
        left: "1rem",
      }
    : labelStyles;

  let inputStyles: React.CSSProperties = {
    padding: "0.6rem 1rem 0.4rem 1rem",
    borderRadius: "0.5rem",
    border: `1px solid ${borderColor ? borderColor : "black"}`,
    backgroundColor: backgroundColor ? backgroundColor : "white",
  };
  inputStyles =
    isHover || isFocused
      ? {
          ...inputStyles,
        }
      : inputStyles;

  return (
    <div style={containerStyles}>
      <label style={labelStyles} htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        style={inputStyles}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChangeCombined}
        {...props}
      />
      {errors ? <InputErrors errors={errors} /> : null}
    </div>
  );
};

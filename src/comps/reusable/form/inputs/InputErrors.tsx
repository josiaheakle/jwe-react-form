import * as React from "react";

interface InputErrorsProps {
  errors: Array<string>;
}

export const InputErrors: React.FC<InputErrorsProps> = ({ errors }) => {
  const listStyles: React.CSSProperties = {
    position: "relative",
    listStyleType: "none",
    color: "red",
    fontSize: ".9rem",
    padding: ".2rem 0 0 0",
    margin: 0,
    maxWidth: "100%",
    lineHeight: "1em",
  };

  const listItemStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: ".1rem 0",
  };

  return (
    <ul style={listStyles}>
      {errors.map((e, i) => (
        <li style={listItemStyles} key={i}>
          <i style={{ marginRight: ".3rem" }}>⚠</i>
          {e}
        </li>
      ))}
    </ul>
  );
};

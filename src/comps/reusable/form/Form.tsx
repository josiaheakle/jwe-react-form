import * as React from "react";

import { FormErrors } from "../../../types/FormErrors";

import * as css from "./Form.module.css";
import { Button } from "./inputs/Button";

interface FormProps {
  children?: React.ReactNode;
  errors?: FormErrors;
  hideSubmit?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * My solution to form handling.
 * This component dynamically injects errors for children inputs when needed.
 */
export const Form: React.FC<FormProps> = ({
  children,
  errors,
  hideSubmit,
  onSubmit,
}) => {
  /**
   * Rerenders children when props is updated, dynamically adding errors to each input field if applicable.
   */
  const childrenInputsWithErrors = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && errors) {
      return React.cloneElement(child, {
        errors: errors[child.props.id],
      });
    }
    return child;
  });

  const formStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <form style={formStyles} onSubmit={onSubmit}>
      {childrenInputsWithErrors}
      {hideSubmit ? null : <Button type="submit">Submit</Button>}
    </form>
  );
};

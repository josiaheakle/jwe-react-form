import * as React from "react";

import * as css from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({}) => {
  return (
    <div className={`${css.Spinner}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

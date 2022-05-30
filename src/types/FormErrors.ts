export interface FormErrors {
  /**
   * INDEX: id of input field as seen on server
   * VALUE: Array of error messages
   */
  [index: string]: Array<string>;
}

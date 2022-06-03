import * as React from "react";

import { Form } from "./reusable/form/Form";
import { TextInput } from "./reusable/form/inputs/TextInput";
import { useInputValue } from "../hooks/InputHooks";
import { FormErrors } from "../types/FormErrors";

function App() {
  const [foo, onFooChange] = useInputValue();
  const [bar, onBarChange] = useInputValue();
  const [errors, setErrors] = React.useState<FormErrors>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let errors: FormErrors = {};
    if (!foo) errors["foo"] = ["Required."];
    if (!bar) errors["bar"] = ["Required.", "Must be more than 6 characters."];
    setErrors(errors);
  };

  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="App">
      <Form onSubmit={onSubmit} errors={errors}>
        <TextInput onChange={onFooChange} id="foo" label="Foo" />
        <TextInput onChange={onBarChange} id="bar" label="Bar" />
      </Form>
    </div>
  );
}

export default App;

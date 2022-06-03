import * as React from "react";

import { Form } from "./reusable/form/Form";
import { TextInput } from "./reusable/form/inputs/TextInput";

import { useInputValue } from "../hooks/InputHooks";

function App() {
  const [foo, onFooChange] = useInputValue();
  const [bar, onBarChange] = useInputValue();

  const onSubmit = () => {};

  const errors = {
    id: ["error", "THIS IS AN ERROR"],
  };

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

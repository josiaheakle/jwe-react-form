# JWE React Forms

A React component package to make managing forms intuitive and easy. This component dynamically injects error messages from an object into any children inputs within the form based on the children's IDs.

## Getting Started

To get started, install the package using npm and begin using the components.

### Installing

```
npm install jwe-react-form
```

## Usage

### Quick Start

Import and use the form and input components needed.

- The errors will be dynamically added to each input if an id matches the errors prop.
- Use the `useInputValue` hook provided to easily manage each input's state.

```
import { Form, TextInput, useInputValue } from "jwe-react-form";

function MyForm = (props) => {

  const [foo, onFooChange] = useInputValue();
  const [bar, onBarChange] = useInputValue();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Do something.
  }

  const errors : {[index:string]:Array<string>} = {
    foo: [
      "This is an error."
    ],
    bar: [
      "This is another error."
    ]
  }

  return(
    <Form onSubmit={onSubmit} errors={errors}>
      <TextInput onChange={onFooChange} id="foo" label="Foo" />
      <TextInput onChange={onBarChange} id="bar" label="Bar" />
    </Form>
  );
}

```

### `<Form />`

When using the Form component, add `jwe-react-form` input comopnents (see below) and set each id to relate to the keys of the `errors` prop.

- `errors` An object with keys matching the ids of inputs and arrays of strings for values, each string within the array will be displayed as an input error under the input.
- `hideSubmit` A boolean which will hide the submit button if true.
- `onSubmit` The form submit event. (_required_)

### `<TextInput />`

This is a styled input. Use as children for the `Form` component (see above).

- `id` The id of the input field. This should match a key within the `errors` prop within the `Form` component if applicable. (_required_)
- `label` A string to label the input. (_required_)
- `errors` An array of strings. This is normally dynamically added by the `Form` component through the `errors` prop.
- `onChange` The input change event. (_required_)
- `backgroundColor` CSS _background-color_ attribute. Changes the background color of the input
- `borderColor` CSS _border-color_ attribute. Changes the color of the border.
- `textColor` CSS _color_ attribute. Changes the color of the input text and the label.

### `useInputValue`

This is a hook which returns the input value and a method to automatically change the value based on onChange events.

```
import {useInputValue, TextInput} from 'jwe-react-form'
//...
const [inputValue, onInputValueChange] = useInputValue()
//...
<TextInput id="input" label="My Input" onChange={onInputValueChange} />
```

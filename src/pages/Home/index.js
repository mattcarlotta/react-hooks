import React, { memo } from "react";
import Helmet from "react-helmet";
import {
  Code,
  Headline,
  Paragraph,
  Title,
  SubTitle,
  SyntaxHighlighter
} from "../../components/Body";
import { Line, Link } from "../../components/Navigation";

const classInput = `import React, { Fragment, Component } from 'react';

class Input extends Component {
 constructor(props) {
   super(props);
   this.state = { value: "" };

   this.handleChange = this.handleChange.bind(this);
   this.resetValue = this.resetValue.bind(this);
 }

 handleChange({ target: { value } }) {
   this.setState({ value: value });
 }

 resetValue() {
   this.setState({ value: "" });
 }

 render() {
   const { value } = this.state;

   return (
     <Fragment>
       <input type="text" value={value} onChange={this.handleChange} />
       <button type="button" onClick={this.resetValue}>Reset</button>
     </Fragment>
   )
 }
}
`;

const functionalInput = `import React, { Fragment, useCallback, useState } from "react";

const Input = () => {
  const [value, setInputValue] = useState("");

  const handleChange = useCallback(
    ({ target: { value } }) => setInputValue(value),
    []
  );

  const resetValue = useCallback(() => {
    setValue(initialState);
  }, [initialState]);

  return (
    <Fragment>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={resetValue}>Reset</button>
    </Fragment>
  );
};
`;

const constructedArray = `const example = useState("");
const value = example[0]; // value === ""
const setInputValue = example[1]; // setInputValue === f()
`;

const deconstructedArray = `const [0, 1] = useState("");
// 0 === value ("")
// 1 === setInputValue (f())
`;

const customHook = `import React, { useCallback, useState } from "react";

const useStringValueHandler = initialState => {
  const [value, setValue] = useState(initialState); // sets initialState ("")

  const handleChange = useCallback(
    ({ target: { value } }) => setValue(value), // updates "value" with event.target.value
    []
  );

  const resetValue = useCallback(() => {
    setValue(initialState); // resets "value" with initialState ("")
  }, [initialState]);

  return {
    value,
    handleChange,
    resetValue
  };
};

export default useStringValueHandler;
`;

const reuseableHook = `import React, { Fragment } from "react";
import useStringValueHandler from "../Hooks/useStringValueHandler";

const Input = () => {
  const { value, handleChange, resetValue } = useStringValueHandler("");

  return (
    <Fragment>
      <input type="text" value={value} onChange={handleChange} />
      <button type="button" onClick={resetValue}>Reset</button>
    </Fragment>
  );
};

`;

const returnInput = `return (
  <input type="text" value={value} onChange={handleChange} />
);
`;

const inlineFunction = `return (
  <input type="text" value={value} onChange={({ target: { value }}) => setInputValue(value)} />
);
`;

const styles = {
  line: {
    marginBottom: 20
  },
  paragraph: {
    display: "inline-block",
    marginBottom: 0
  },
  subtitle: {
    marginTop: 0,
    marginBottom: 0
  },
  title: {
    marginTop: 60
  }
};

const Home = memo(() => (
  <>
    <Helmet title="Home" />
    <Headline>React Hooks</Headline>
    <Line style={styles.line} />
    <Paragraph>
      Hooks are a new addition in React 16.8. By utilizing functional components
      in combination with hooks, we can have the same React features without
      writing a class!
    </Paragraph>
    <Paragraph>
      For example, before hooks, we would have to use classes to achieve a
      controlled input.
      <SubTitle style={styles.subtitle}>Class Component</SubTitle>
      <SyntaxHighlighter>{classInput}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      However, with the addition of hooks, we can achieve the same result, but
      without a class.
      <SubTitle style={styles.subtitle}>Functional Component</SubTitle>
      <SyntaxHighlighter margin="0 0 5px 0">
        {functionalInput}
      </SyntaxHighlighter>
      That's great... Right? But wait,{" "}
      <strong>what is happening behind the scenes?</strong>
    </Paragraph>
    <Title style={styles.title}>Understanding useState Arrays</Title>
    <Paragraph style={styles.paragraph}>
      Now, we might look at this declaration{" "}
      <Code>{`const [value, setInputValue] = useState("");`}</Code> and ask
      ourself: <strong>What's happening?</strong> Simply put,{" "}
      <Code>{`useState("");`}</Code> is returning an array with two indices. The
      array as returned by <Code>{`useState("");`}</Code> would look like:{" "}
      <Code>{`["", f()]`}</Code>, where the first index of the array{" "}
      <Code>{`[0]`}</Code> contains the <Code>{`value`}</Code>, and the second
      index of the array <Code>{`[1]`}</Code> contains the{" "}
      <Code>{`setInputValue`}</Code> function. There's a bit of magic going on
      behind the scenes when it comes to the <Code>{`setInputValue();`}</Code>{" "}
      function. Unlike a class component that uses the opinionated{" "}
      <Code>{`this.setState();`}</Code> nomenclature, we can name{" "}
      <Code>{`this.setState();`}</Code> to anything we want... like{" "}
      <Code>{`setInputValue();`}</Code>. It acts exactly the same!
    </Paragraph>
    <Paragraph style={{ marginTop: 20 }}>
      Okay, but what does this left-hand statement{" "}
      <Code>{`const [value, setInputValue]`}</Code> mean? Thanks to ES6
      (ECMAScript 6), we can deconstruct the array and define each of its
      indices as a variable. So instead of:
      <SyntaxHighlighter margin="0">{constructedArray}</SyntaxHighlighter>
      We can simply deconstruct the array by its index position:
      <SyntaxHighlighter margin="0">{deconstructedArray}</SyntaxHighlighter>
    </Paragraph>
    <Title style={styles.title}>Understanding useCallback functions</Title>
    <Paragraph>
      Great! We have a value and a way to update the value. But how do we
      implement them into a <strong>functional</strong> component? First, we
      should define <Code>{`value`}</Code> and <Code>{`setInputValue();`}</Code>{" "}
      within a function's scope (for example, within Input's scope). Then, we'll
      define a <Code>{`handleChange();`}</Code> function that will deconstruct{" "}
      <Code>{`event.target.value`}</Code> and pass it to{" "}
      <Code>{`setInputValue(value);`}</Code>. Lastly, we can implement them into
      a function's return statement:
      <Paragraph>
        <SyntaxHighlighter margin="10px 0 20px 0">
          {returnInput}
        </SyntaxHighlighter>
      </Paragraph>
      But wait... hold up! Why... why don't we just define{" "}
      <Code>{`handleChange();`}</Code> inline? Doesn't this work too!?
      <Paragraph style={{ marginTop: 20 }}>
        <SyntaxHighlighter margin="0 0 20px 0">
          {inlineFunction}
        </SyntaxHighlighter>
      </Paragraph>
      <strong>Yes.</strong> We can do this and it is supported. However, by
      defining this function inline, React sees this inline function as an
      anonymous function. Therefore, each time <Code>{`value`}</Code> is updated
      by <Code>{`setInputValue();`}</Code> and the component is rerendered, this
      anonymous function has to be{" "}
      <strong>recreated over, and over, and over again</strong>. This can affect
      the application's overall performance, especially if this anonymous
      function does some heavy calculation. To avoid unnecessary recreations, we
      can leverage React's <Code>{`useCallback();`}</Code> function. The{" "}
      <Code>{`useCallback();`}</Code> function let's React know not to recreate
      this function during rerenders and would be the equilvalent of utilizing a
      PureComponent or shouldComponentUpdate. However, there is one very
      important rule to using <Code>{`useCallback();`}</Code> in that it's first
      argument must be a function <Code>{`() => {};`}</Code> and it's second
      argument must be an array <Code>{`[]`}</Code> of dependencies. However,
      this will be covered more in depth within the{" "}
      <Link style={{ marginRight: "5px" }} to="/hooks#usecallback">
        Hooks API
      </Link>
      .
      <br />
    </Paragraph>
    <Title style={styles.title}>Leveraging reuseable hooks</Title>
    <Paragraph>
      Ohhhh, but wait! There's more! Here's comes the real magic! Notice above
      how we have our <Code>{`useState();`}</Code> and{" "}
      <Code>{`useCallback();`}</Code> defined within the component. What if we
      took it one step further and removed their explicit declarations from our{" "}
      <strong>functional </strong>
      component!? Is it possible? Can we do it!?
    </Paragraph>
    <Paragraph>
      <strong>Yes!</strong>
    </Paragraph>
    <Paragraph>
      The great thing about hooks is that state no longer has to be statically
      and explicitly declared within a component. Instead, it can be a reuseable
      function! Meaning, we can create a reuseable custom hook...
      <Paragraph style={{ marginTop: 30 }}>
        <SyntaxHighlighter margin="0">{customHook}</SyntaxHighlighter>
      </Paragraph>
      that returns an object <Code>{`{}`}</Code> with three properties. A{" "}
      <Code>{`value`}</Code>, a <Code>{`handleChange();`}</Code> function, and a{" "}
      <Code>{`resetValue();`}</Code> function that can be used to update the
      input's string <Code>{`""`}</Code> value:
      <Paragraph style={{ marginTop: 30 }}>
        <SyntaxHighlighter margin="0">{reuseableHook}</SyntaxHighlighter>
      </Paragraph>
    </Paragraph>
    <Title style={styles.title}>Putting the pieces together</Title>
    <Paragraph>
      Wow, that's pretty cool! We have a <Code>{`value`}</Code>, a performant
      way to update and reset this value via <Code>{`handleChange();`}</Code>{" "}
      and <Code>{`resetValue();`}</Code> functions, <strong>and</strong> a
      reuseable <Code>{`useStringValueHandler("");`}</Code> hook.
    </Paragraph>
    <Paragraph>
      <strong>What's next!?</strong>
    </Paragraph>
    <Paragraph>
      Nothing. That's it. Just simply utilize this functional{" "}
      <Code>{`<Input />`}</Code> component. In addition, if any other component
      needs to control a string, we can just import and utilize our custom,
      reuseable <Code>{`useStringValueHandler("");`}</Code> hook. Simple,
      adaptable and painless! Check out the live{" "}
      <Link style={{ marginRight: "5px" }} to="/examples/forms/elements#input">
        Input
      </Link>
      example!
    </Paragraph>
  </>
));

export default Home;

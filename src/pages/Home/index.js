import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {
  Code,
  Headline,
  ListItem,
  Paragraph,
  Title,
  SubTitle,
  SyntaxHighlighter
} from "../../components/Body";
import { AnchorLink, Line, Link } from "../../components/Navigation";
import { useScroll } from "../../components/Hooks";
import * as examples from "./Examples";

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

const homeLinks = [
  { hash: "introductiontohooks", name: "Introduction to Hooks" },
  {
    hash: "understandingusestatearrays",
    name: "Understanding useState Arrays"
  },
  {
    hash: "understandingusecallbackfunctions",
    name: "Understanding useCallback functions"
  },
  { hash: "leveragingreuseablehooks", name: "Leveraging reuseable hooks" },
  { hash: "puttingthepiecestogether", name: "Putting the pieces together" }
];

const Home = ({ location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [introRef] = useScroll(currentHash);
  const [useStateRef] = useScroll(currentHash);
  const [useCallbackRef] = useScroll(currentHash);
  const [customHookRef] = useScroll(currentHash);
  const [conclusionRef] = useScroll(currentHash);

  return (
    <>
      <Helmet title="Home" />
      <Headline>React Hooks</Headline>
      <Line style={styles.line} />
      <Paragraph>
        Hooks are a new addition in React 16.8. By utilizing functional
        components in combination with hooks, we can have the same React
        features without writing a class!
      </Paragraph>
      <Title>Quick Links</Title>
      <Paragraph>
        <ul>
          {homeLinks.map(({ hash, name }) => (
            <ListItem key={name}>
              <Link to={`/index#${hash}`}>{name}</Link>
            </ListItem>
          ))}
        </ul>
      </Paragraph>
      <Title ref={introRef} style={styles.title}>
        <AnchorLink to="/index#introductiontohooks" />
        Introduction to Hooks
      </Title>
      <Paragraph>
        For example, before hooks, we would have to use classes to achieve a
        controlled input.
        <SubTitle style={styles.subtitle}>Class Component</SubTitle>
        <SyntaxHighlighter>{examples.classInput}</SyntaxHighlighter>
      </Paragraph>
      <Paragraph>
        However, with the addition of hooks, we can achieve the same result, but
        without a class.
        <SubTitle style={styles.subtitle}>Functional Component</SubTitle>
        <SyntaxHighlighter margin="0 0 5px 0">
          {examples.functionalInput}
        </SyntaxHighlighter>
        That's great... Right? But wait,{" "}
        <strong>what is happening behind the scenes?</strong>
      </Paragraph>
      <Title ref={useStateRef} style={styles.title}>
        <AnchorLink to="/index#understandingusestatearrays" />
        Understanding useState Arrays
      </Title>
      <Paragraph style={styles.paragraph}>
        Now, we might look at this declaration{" "}
        <Code>{`const [value, setInputValue] = useState("");`}</Code> and ask
        ourself: <strong>What's happening?</strong> Simply put,{" "}
        <Code>{`useState("");`}</Code> is returning an array with two indices.
        The array as returned by <Code>{`useState("");`}</Code> would look like:{" "}
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
        <SyntaxHighlighter margin="0">
          {examples.constructedArray}
        </SyntaxHighlighter>
        We can simply deconstruct the array by its index position:
        <SyntaxHighlighter margin="0">
          {examples.deconstructedArray}
        </SyntaxHighlighter>
      </Paragraph>
      <Title ref={useCallbackRef} style={styles.title}>
        <AnchorLink to="/index#understandingusecallbackfunctions" />
        Understanding useCallback functions
      </Title>
      <Paragraph>
        Great! We have a value and a way to update the value. But how do we
        implement them into a <strong>functional</strong> component? First, we
        should define <Code>{`value`}</Code> and{" "}
        <Code>{`setInputValue();`}</Code> within a function's scope (for
        example, within Input's scope). Then, we'll define a{" "}
        <Code>{`handleChange();`}</Code> function that will deconstruct{" "}
        <Code>{`event.target.value`}</Code> and pass it to{" "}
        <Code>{`setInputValue(value);`}</Code>. Lastly, we can implement them
        into a function's return statement:
        <Paragraph>
          <SyntaxHighlighter margin="10px 0 20px 0">
            {examples.returnInput}
          </SyntaxHighlighter>
        </Paragraph>
        But wait... hold up! Why... why don't we just define{" "}
        <Code>{`handleChange();`}</Code> inline? Doesn't this work too!?
        <Paragraph style={{ marginTop: 20 }}>
          <SyntaxHighlighter margin="0 0 20px 0">
            {examples.inlineFunction}
          </SyntaxHighlighter>
        </Paragraph>
        <strong>Yes.</strong> We can do this and it is supported. However, by
        defining this function inline, React sees this inline function as an
        anonymous function. Therefore, each time <Code>{`value`}</Code> is
        updated by <Code>{`setInputValue();`}</Code> and the component is
        rerendered, this anonymous function has to be{" "}
        <strong>recreated over, and over, and over again</strong>. This can
        affect the application's overall performance, especially if this
        anonymous function does some heavy calculation. To avoid unnecessary
        recreations, we can leverage React's <Code>{`useCallback();`}</Code>{" "}
        function. The <Code>{`useCallback();`}</Code> function let's React know
        not to recreate this function during rerenders and would be the
        equilvalent of utilizing a PureComponent or shouldComponentUpdate.
        However, there is one very important rule to using{" "}
        <Code>{`useCallback();`}</Code> in that it's first argument must be a
        function <Code>{`() => {};`}</Code> and it's second argument must be an
        array <Code>{`[]`}</Code> of dependencies. However, this will be covered
        more in depth within the{" "}
        <Link style={{ marginRight: "5px" }} to="/hooks#usecallback">
          useCallback
        </Link>
        Hooks API.
        <br />
      </Paragraph>
      <Title ref={customHookRef} style={styles.title}>
        <AnchorLink to="/index#leveragingreuseablehooks" />
        Leveraging reuseable hooks
      </Title>
      <Paragraph>
        Ohhhh, but wait! There's more! Here's comes the real magic! Notice above
        how we have our <Code>{`useState();`}</Code> and{" "}
        <Code>{`useCallback();`}</Code> defined within the component. What if we
        took it one step further and removed their explicit declarations from
        our <strong>functional </strong>
        component!? Is it possible? Can we do it!?
      </Paragraph>
      <Paragraph>
        <strong>Yes!</strong>
      </Paragraph>
      <Paragraph>
        The great thing about hooks is that state no longer has to be statically
        and explicitly declared within a component. Instead, it can be a
        reuseable function! Meaning, we can create a reuseable custom hook...
        <Paragraph style={{ marginTop: 30 }}>
          <SyntaxHighlighter margin="0">
            {examples.customHook}
          </SyntaxHighlighter>
        </Paragraph>
        that returns an object <Code>{`{}`}</Code> with three properties. A{" "}
        <Code>{`value`}</Code>, a <Code>{`handleChange();`}</Code> function, and
        a <Code>{`resetValue();`}</Code> function that can be used to update the
        input's string <Code>{`""`}</Code> value:
        <Paragraph style={{ marginTop: 30 }}>
          <SyntaxHighlighter margin="0">
            {examples.reuseableHook}
          </SyntaxHighlighter>
        </Paragraph>
      </Paragraph>
      <Title ref={conclusionRef} style={styles.title}>
        <AnchorLink to="/index#puttingthepiecestogether" />
        Putting the pieces together
      </Title>
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
        <Code>{`<Input />`}</Code> component. In addition, if any other
        component needs to control a string, we can just import and utilize our
        custom, reuseable <Code>{`useStringValueHandler("");`}</Code> hook.
        Simple, adaptable and painless! Check out the live{" "}
        <Link
          style={{ marginRight: "5px" }}
          to="/examples/forms/elements#input"
        >
          Input
        </Link>
        example!
      </Paragraph>
    </>
  );
};

Home.propTypes = {
  hash: PropTypes.string
};

export default Home;

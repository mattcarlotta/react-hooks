import React from "react";
import Helmet from "react-helmet";
import {
  Button,
  Code,
  Headline,
  ListItem,
  Paragraph,
  Title,
  SubTitle,
  SyntaxHighlighter
} from "../../components/Body";
import { AnchorLink, Line, Link } from "../../components/Navigation";
import { contextExample, providerExample, useProviderExample } from "./Context";
import { callbackExample } from "./Callback";
import { useEffectExample } from "./Effect";

const styles = {
  altlink: { marginRight: "5px" },
  eqivs: { paddingLeft: 20, marginBottom: 0 },
  line: { marginBottom: 20 },
  link: { textDecoration: "none" },
  list: { margin: 0 },
  paragraph: { display: "inline-block", marginBottom: 0 },
  subtitle: { marginTop: 0, marginBottom: 0 },
  title: { marginTop: 60 }
};

const exampleHookItems = [
  { hash: "usecallback", name: "useCallback" },
  { hash: "usecontext", name: "useContext" },
  { hash: "usedebugvalue", name: "useDebugValue" },
  { hash: "useeffect", name: "useEffect" },
  { hash: "useimperativehandle", name: "useImperativeHandle" },
  { hash: "uselayouteffect", name: "useLayoutEffect" },
  { hash: "usememo", name: "useMemo" },
  { hash: "useref", name: "useRef" },
  { hash: "usestate", name: "useState" }
];

const HooksAPI = () => (
  <>
    <Helmet title="Hooks API" />
    <Headline>Hooks API</Headline>
    <Line style={styles.line} />
    <Paragraph>
      Below you'll find definitions and examples of the hooks bundled with
      React. If you're coming from classes, you'll be used to component
      lifecycles. While there are some equilvalents to lifecycle methods as
      defined below, as as of React 16.8.6, there aren't any equilvalents to{" "}
      <Code>{`componentDidCatch();`}</Code> and{" "}
      <Code>{`getDerivedStateFromError();`}</Code>.
    </Paragraph>
    <Title>Quick Links</Title>
    <Paragraph>
      <ul>
        {exampleHookItems.map(({ hash, name }) => (
          <ListItem key={name}>
            <Link to={`/hooks#${hash}`}>{name}</Link>
          </ListItem>
        ))}
      </ul>
    </Paragraph>
    <Title id="usecallback" style={styles.title}>
      <AnchorLink to="/hooks#usecallback" />
      useCallback
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Class equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          <Code>{`Pure Component`}</Code>
        </ListItem>
        <ListItem>
          <Code>{`shouldComponentUpdate`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      The <Code>{`useCallback();`}</Code> hook is a function that will be called
      after some sort of event happens. It's structured to take in a callback
      function and an array of dependencies:{" "}
      <Code>{`useCallback(() => {}, [dependencies])`}</Code>. What makes it
      unique is that it's a memoized function -- caches the{" "}
      <strong>function</strong> if the dependencies haven't changed. Unlike
      anonymous functions <Code>{`() => {}`}</Code>, this makes it ideal for
      child components because if the parent re-renders, the child component's
      function won't need to be recreated each time the parent has been updated.
      Why? Because the function has been memoized (cached)! Although using
      anonymous functions in the <Code>{`render`}</Code> method is supported, it{" "}
      <strong>may</strong> lead to slower application performance (its an
      unmemoized function, meaning it needs to be recreated for each re-render).
    </Paragraph>
    <Paragraph style={{ marginTop: 20 }}>
      For example, let's say we create a <Code>{`Parent`}</Code> component and a{" "}
      <Code>{`Toggle`}</Code> and an <Code>{`Input`}</Code> child component that
      can be disabled:
      <SubTitle style={{ marginBottom: 0, marginTop: 20 }}>
        UseCallback Example
      </SubTitle>
      <SyntaxHighlighter>{callbackExample}</SyntaxHighlighter>
      By using <Code>{`useCallback();`}</Code>, it will not only accept an{" "}
      <Code>{`event callback`}</Code>, but it will prevent an inner function{" "}
      <Code>{`setValue();`}</Code> from being executed if a separate dependecy,{" "}
      <Code>{`isDisabled`}</Code> or <Code>{`isSubmitting`}</Code>, is{" "}
      <Code>{`true`}</Code>. In addition, the <Code>{`Input`}</Code> component
      would not need to be re-rendered because the{" "}
      <Code>{`[dependencies]`}</Code> haven't changed.
    </Paragraph>
    <Title id="usecontext" style={styles.title}>
      <AnchorLink to="/hooks#usecontext" />
      useContext
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Class equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          <Code>{`static contextType = MyContext`}</Code>
        </ListItem>
        <ListItem>
          <Code>{`<MyContext.Consumer>`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      If you're unfamilar with <Code>{`Context`}</Code>, in summation, it
      provides top-level state, props and/or methods to components that need to
      access them. In a metaphorical sense, it's similar to a storage container.
      While not everyone has nor needs a storage container, for those that do,
      this store container can keep anything that needs to be shared with
      family, friends, and even neighbors! <Code>{`Context`}</Code> can have the
      same functionality in that it can store any shared props that need to be
      accessed/updated by parent and/or their child components.
    </Paragraph>
    <Paragraph>
      The most common usage examples of <Code>{`Context`}</Code> would be a
      top-level theme that changes the entire application's UI at the press of a
      button (which is exactly how this website uses it!). Other examples might
      be authentication state that is required for a user to view a specific
      page or access a specific component; or, another usage might be providing
      a shared function that multiple components need to call.
      <SubTitle style={{ marginBottom: 0, marginTop: 20 }}>
        Custom Context Component & Hook Example
      </SubTitle>
      <SyntaxHighlighter>{contextExample}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      There are some ground rules to utilizing <Code>{`Context`}</Code>. First
      rule is that the <Code>{`Context.Provider`}</Code> will only accept an
      object <Code>{`{}`}</Code> utilized within it's <Code>{`value`}</Code>{" "}
      property. Passing other properties to <Code>{`Context.Provider`}</Code>{" "}
      will be ignored! Second rule is that we'll need to utilize the{" "}
      <Code>{`Provider`}</Code> component we've created above and place it at
      the root-level of our application (within the root{" "}
      <Code>{`index.js`}</Code> file).
      <SubTitle style={{ marginBottom: 0, marginTop: 20 }}>
        src/index.js
      </SubTitle>
      <SyntaxHighlighter>{providerExample}</SyntaxHighlighter>
      Lastly, we'll import the hook (which is the default export:{" "}
      <Code>{`export default () => useContext(Context)`}</Code>), as{" "}
      <Code>{`useProvider();`}</Code>. Then, we'll utilize{" "}
      <Code>{`useProvider();`}</Code> as if it were a hook provided by React.
      <SubTitle style={{ marginBottom: 0, marginTop: 20 }}>
        Context Example Component
      </SubTitle>
      <SyntaxHighlighter>{useProviderExample}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      <SubTitle style={{ marginBottom: 0, marginTop: 10 }}>
        What's next?
      </SubTitle>
      Now that we've created a top-level theme, we can access this{" "}
      <Code>{`theme`}</Code> and <Code>{`toggleTheme`}</Code> from any component
      by utilizing our <Code>{`useProvider();`}</Code> hook -- yep, that's
      right, any parent or child component can access and/or update it. The{" "}
      <Code>{`useContext();`}</Code> hook allows{" "}
      <Code>{`Context.Provider`}</Code> to retain its <Code>{`value`}</Code> for
      the duration of the session! However, there is one major caveat with using{" "}
      <Code>{`useContext();`}</Code>. Any time something changes within the{" "}
      <Code>{`value`}</Code> property within the{" "}
      <Code>{`Context.Provider`}</Code>, the entire DOM tree is re-rendered. If
      your application is heavily nested, this can be detrimental to your
      application's performance. As such, use sparingly or consider using a{" "}
      <Link style={styles.altlink} to="/examples/misc#reduxpersistence">
        Redux
      </Link>{" "}
      implementation. See{" "}
      <Link style={styles.altlink} to="/examples/misc#contextpersistence">
        Context Persistence
      </Link>{" "}
      for a <Code>{`Context`}</Code> example.
    </Paragraph>
    <Title id="usedebugvalue" style={styles.title}>
      <AnchorLink to="/hooks#usedebugvalue" />
      useDebugValue
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Class equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>(none)</ListItem>
      </ul>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      The <Code>{`useDebugValue();`}</Code> hook is a special use-case function
      that interacts with{" "}
      <Button
        as="a"
        href="https://github.com/facebook/react-devtools"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        React DevTools
      </Button>
      . In summation, it displays a label next to a custom hook. Since this
      guide primarily focuses on transitioning from classes to functional
      components, please refer to the official{" "}
      <Button
        as="a"
        href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        useDebugValue
      </Button>{" "}
      documentation.
    </Paragraph>
    <Title id="useeffect" style={styles.title}>
      <AnchorLink to="/hooks#useeffect" />
      useEffect
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Class equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          A deffered <Code>{`componentDidMount`}</Code>
        </ListItem>
        <ListItem>
          A deffered <Code>{`componentDidUpdate`}</Code>
        </ListItem>
        <ListItem>
          <Code>{`componentWillUnmount`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useEffect();`}</Code> hook is a slightly different approach to
      setting up and updating a component. Unlike{" "}
      <Code>{`componentDidMount`}</Code> and <Code>{`componentDidUpdate`}</Code>
      , the hook is deffered to be executed after the DOM has been painted.{" "}
      <strong>What does this mean?</strong> It means, that the hook will not
      block the browser from updating what the user sees.{" "}
      <strong>Why is this important?</strong> This is important because
      sometimes you want to execute some code that doesn't need to prevent the{" "}
      <Code>{`render`}</Code> method from being painted. Examples will include{" "}
      <Code>{`event listeners`}</Code>, <Code>{`subscriptions`}</Code>, and{" "}
      <Code>{`analytics`}</Code>. However, please note that subsequent
      re-renders will <strong>not</strong> be deffered as React flushes the
      previous render's effects. Therefore, make sure to clean up any residual
      listeners or subscriptions. Otherwise, this may lead to memory leaks.
    </Paragraph>
    <Paragraph style={{ marginTop: 20 }}>
      For example, let's say we create a <Code>{`ShowAlert`}</Code> component
      that displays a message. This message can be hidden when a user clicks
      anywhere outside of the message:
      <SyntaxHighlighter>{useEffectExample}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      In the example above, this simulates a deffered{" "}
      <Code>{`componentDidMount`}</Code> lifecycle. Since the listener is not
      vital to displaying the component, it doesn't block browser updates.
      Meanwhile, the <Code>{`componentWillUnmount`}</Code> lifecycle will be
      executed like normal, however, the difference is that{" "}
      <Code>{`useEffect();`}</Code> will <Code>{`return`}</Code> a cleanup
      function before unmounting. To see this in action, please see the{" "}
      <Link style={styles.altlink} to="/examples/forms/elements#select">
        Select
      </Link>{" "}
      example (click on the dropdown to display some options and then click
      elsewhere to automatically hide them).
    </Paragraph>
    <Paragraph>
      If you'd like to see an example that acts like a{" "}
      <Code>{`componentDidUpdate`}</Code> lifecycle, please see the{" "}
      <Link style={styles.altlink} to="/examples/misc#fetchingandupdatingdata">
        Fetching and Updating Data
      </Link>{" "}
      example.
    </Paragraph>
  </>
);

export default HooksAPI;

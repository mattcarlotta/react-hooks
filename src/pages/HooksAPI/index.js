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
import { contextExample, providerExample, useProviderExample } from "./Context";
import { callbackExample } from "./Callback";

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

const HooksAPI = ({ location: { hash } }) => {
  const currentHash = hash.substr(1);
  const [callbackRef] = useScroll(currentHash);
  const [contextRef] = useScroll(currentHash);
  // const [dragndropRef] = useScroll(currentHash);
  // const [localstorageRef] = useScroll(currentHash);
  // const [contextRef] = useScroll(currentHash);
  // const [reduxRef] = useScroll(currentHash);
  // const [apiRef] = useScroll(currentHash);

  return (
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
      <Title ref={callbackRef} style={styles.title}>
        <AnchorLink to="/hooks#usecallback" />
        useCallback
      </Title>
      <Paragraph style={styles.paragraph}>
        The <Code>{`useCallback`}</Code> hook is a function that will be called
        after some sort of event happens. It's structured to take in a callback
        function and an array of dependencies:{" "}
        <Code>{`useCallback(() => {}, [dependencies])`}</Code>. What makes it
        unique is that it's a memoized function -- caches the{" "}
        <strong>function</strong> if the dependencies haven't changed. Unlike
        anonymous functions <Code>{`() => {}`}</Code>, this makes it ideal for
        child components because if the parent re-renders, the child component's
        function won't need to be recreated each time the parent has been
        updated. Why? Because the function has been memoized (cached)! Although
        using anonymous functions in the <Code>{`render`}</Code> method is
        supported, it <strong>may</strong> lead to slower application
        performance (its an unmemoized function, meaning it needs to be
        recreated for each re-render).
      </Paragraph>
      <Paragraph style={{ marginTop: 20 }}>
        For example, let's say we create a <Code>{`Parent`}</Code> component and
        a <Code>{`Toggle`}</Code> and an <Code>{`Input`}</Code> child component
        that can be disabled:
        <SubTitle style={{ marginBottom: 0, marginTop: 20 }}>
          UseCallback Example
        </SubTitle>
        <SyntaxHighlighter>{callbackExample}</SyntaxHighlighter>
        By using <Code>{`useCallback();`}</Code>, it will not only accept an{" "}
        <Code>{`event callback`}</Code>, but it will prevent an inner function
        from being executed if a separate dependecy, <Code>{`isDisabled`}</Code>{" "}
        or <Code>{`isSubmitting`}</Code>, is <Code>{`true`}</Code>. In addition,
        the <Code>{`Input`}</Code> component would not need to be re-rendered
        because the <Code>{`[dependencies]`}</Code> haven't changed -- similar
        to a <Code>{`Pure Component`}</Code> or the
        <Code>{`shouldComponentUpdate`}</Code> lifecycle.
      </Paragraph>
      <Title ref={contextRef} style={styles.title}>
        <AnchorLink to="/hooks#usecontext" />
        useContext
      </Title>
      <Paragraph style={styles.paragraph}>
        If you're unfamilar with <Code>{`Context`}</Code>, in summation, it
        provides top-level state, props and/or methods to components that need
        to access them. In a metaphorical sense, it's similar to the mayor of a
        city. Not all cities have mayors, but those that do, elect a mayor to
        act like a high-level task manager to solve administrative,
        legistilative and operational duties that can affect all of the
        citizens. <Code>{`Context`}</Code> can have the same functionality!
      </Paragraph>
      <Paragraph>
        The most common usage examples of <Code>{`Context`}</Code> would be a
        top-level theme that changes the entire application's UI at the press of
        a button (which is exactly how this website uses it!). Other examples
        might be authentication state that is required for a user to view a
        specific page or access a specific component; or, another usage might be
        providing a shared function that multiple components need to call.
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
        <Code>{`theme`}</Code> and <Code>{`toggleTheme`}</Code> from any
        component by utilizing <Code>{`useProvider();`}</Code> -- yes, that's
        right... any parent or child can access and/or update it. The{" "}
        <Code>{`useContext();`}</Code> hook allows{" "}
        <Code>{`Context.Provider`}</Code> to retain its <Code>{`value`}</Code>{" "}
        for the duration of the session! However, there is one major caveat with
        using <Code>{`useContext();`}</Code>. Any time something changes within
        the <Code>{`value`}</Code> property within the{" "}
        <Code>{`Context.Provider`}</Code>, the entire DOM tree is re-rendered.
        If your application is heavily nested, this can be detrimental to your
        application's performance. As such, use sparingly.
      </Paragraph>
    </>
  );
};

HooksAPI.propTypes = {
  hash: PropTypes.string
};

export default HooksAPI;

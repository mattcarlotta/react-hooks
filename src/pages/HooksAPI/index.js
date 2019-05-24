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
import { useLayoutEffectExample } from "./Layout";

const styles = {
  altlink: { margin: "0" },
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
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          A memoized function within a <Code>{`Pure Component`}</Code>
        </ListItem>
        <ListItem>
          A custom <Code>{`shouldComponentUpdate`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph style={styles.paragraph}>
      The <Code>{`useCallback();`}</Code> hook is a function that will be called
      after some sort of event happens. It's structured to accept a callback
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
      <Code>{`setValue();`}</Code> from being executed if a separate dependency,{" "}
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
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
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
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
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
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          A deffered <Code>{`componentDidMount`}</Code>
        </ListItem>
        <ListItem>
          A deffered <Code>{`componentDidUpdate`}</Code>
        </ListItem>
        <ListItem>
          A deffered <Code>{`componentWillReceiveProps`}</Code> (deprecated)
        </ListItem>
        <ListItem>
          <Code>{`componentWillUnmount`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useEffect();`}</Code> hook is a function to add{" "}
      <Code>{`event listeners`}</Code>, <Code>{`subscriptions`}</Code>, and{" "}
      <Code>{`API calls`}</Code> to update a component after it's already been
      rendered. It's structured to accept a callback function and an array of
      dependencies: <Code>{`useEffect(() => {}, [dependencies])`}</Code>. If you
      don't provide an array of <Code>{`[dependencies])`}</Code>, then this hook
      will only run once -- similiar to the <Code>{`componentDidMount`}</Code>{" "}
      and <Code>{`componentWillUnmount`}</Code> lifecycles. However, unlike the{" "}
      <Code>{`componentDidMount`}</Code> and <Code>{`componentDidUpdate`}</Code>{" "}
      lifecycles, the hook is deffered. <strong>What does this mean?</strong> It
      means that the hook will only be executed after the DOM has already been
      laid out and painted to the screen.{" "}
      <strong>Why is this important?</strong> This is important because
      sometimes you want to execute some code that doesn't need to prevent the{" "}
      <Code>{`render`}</Code> method from being painted. In other words, we
      won't be <strong>mutating</strong> the DOM within this hook -- such as
      adding a <Code>{`classList`}</Code> to an element or adjusting its styles
      after it's already been rendered. Since this hook is deffered, those DOM
      mutations will be visible to the user and look inconsistent and
      unintentional. Meanwhile, subsequent re-renders will <strong>not</strong>{" "}
      be deffered as React flushes the previous render's effects. Therefore,
      make sure to clean up any residual listeners or subscription; otherwise,
      this may lead to memory leaks.
    </Paragraph>
    <Paragraph style={{ marginTop: 20 }}>
      For example, let's say we create a <Code>{`ShowAlert`}</Code> component
      that displays a message. This message can be hidden when a user clicks
      anywhere outside of the message:
      <SyntaxHighlighter>{useEffectExample}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      In the example above, we're simulating a deffered{" "}
      <Code>{`componentDidMount`}</Code> lifecycle. Since the event listener is
      not vital to displaying our component, it won't block browser updates (nor
      will it alter the DOM in a way that the user will see a flashing UI
      change). Meanwhile, the <Code>{`componentWillUnmount`}</Code> lifecycle
      will be executed like normal, however, the difference is that{" "}
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
      example. This example works by changing a <Code>{`useEffect();`}</Code>{" "}
      dependency (in this case, a <Code>{`ref`}</Code> dependency). The hook
      sees that the dependency has changed from its previous render and
      re-renders the component -- similar to how a <Code>{`prop`}</Code> change
      might trigger the <Code>{`componentDidUpdate`}</Code> lifecycle.
    </Paragraph>
    <Title id="useimperativehandle" style={styles.title}>
      <AnchorLink to="/hooks#useimperativehandle" />
      useImperativeHandle
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>(none)</ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useImperativeHandle();`}</Code> is a special use-case hook
      that allows you to customize and instantiate a <Code>{`ref`}</Code> and
      customize any of its <Code>event handlers</Code>. In simple terms, it
      hoists the <Code>{`ref`}</Code>'s native DOM events like{" "}
      <Code>{`blur`}</Code>, <Code>{`focus`}</Code>, <Code>{`keydown`}</Code>{" "}
      and so on to be customizable within a functional component -- for a full
      list of DOM events, please visit w3school's{" "}
      <Button
        as="a"
        href="https://www.w3schools.com/jsref/dom_obj_event.asp"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        DOM Events
      </Button>{" "}
      documentation. This should be a considered a hack and a last resort to
      handle DOM events. Since React exposes a lot of these{" "}
      <Code>event handlers</Code> already, utilizing{" "}
      <Code>{`useImperativeHandle();`}</Code> can be avoided.
    </Paragraph>
    <Title id="uselayouteffect" style={styles.title}>
      <AnchorLink to="/hooks#uselayouteffect" />
      useLayoutEffect
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          <Code>{`componentDidMount`}</Code>
        </ListItem>
        <ListItem>
          <Code>{`componentDidUpdate`}</Code>
        </ListItem>
        <ListItem>
          <Code>{`componentWillUnmount`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useLayoutEffect();`}</Code> is a special use-case hook that
      allows you to manipulate the DOM and/or calculate DOM measurements after
      the first <Code>{`render`}</Code> has been called, but before anything is
      painted to the browser. This is similar in usage to{" "}
      <Code>{`useEffect();`}</Code>; however, this hook has a synchronous
      effect: First <Code>{`render`}</Code>, then{" "}
      <Code>{`useLayoutEffect();`}</Code>, second <Code>{`render`}</Code>, then{" "}
      <Code>{`useLayoutEffect();`}</Code>, then paint to screen versus the
      deffered effect: First <Code>{`render`}</Code>, second{" "}
      <Code>{`render`}</Code>, paint to screen, then{" "}
      <Code>{`useEffect();`}</Code>. The most important aspect is that this hook
      has access to the DOM before painting to the screen. Therefore, unlike in{" "}
      <Code>{`useEffect();`}</Code>, we should mutate the DOM utilizing this
      hook. Since this mutation happens synchronously, it won't be visible to
      the user.
    </Paragraph>
    <Paragraph>
      Let's take a look at this extremely aribitary example of an authenticated
      component that checks if a user is <Code>{`isAuthenticated`}</Code> before
      showing them a secret recipe:
      <SyntaxHighlighter>{useLayoutEffectExample}</SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      Let's assume our users are sneaky and they try to go directly to one of
      the super secret routes without logging in.{" "}
      <strong>What do you think will happen?</strong> Because{" "}
      <Code>{`useEffect();`}</Code> happens after painting, the{" "}
      <Code>{`SuperSecretSauce`}</Code> will briefly flash on their screens. If
      they're quick enough, they can snap a screenshot! However, if we utilize{" "}
      <Code>{`useLayoutEffect();`}</Code>, they won't be able to see anything at
      all! <strong>Why?</strong> Because <Code>{`useLayoutEffect();`}</Code> has
      manipulated the DOM before anything is painted to their screen. Therefore
      our <Code>{`SuperSecretDrink`}</Code> is safe from those sneaky snakes.
    </Paragraph>
    <Paragraph>
      Check out this example of <Code>{`useLayoutEffect();`}</Code> vs{" "}
      <Code>{`useEffect();`}</Code>:{" "}
      <iframe
        src="https://codesandbox.io/embed/useeffect-vs-uselayouteffect-pvi3c?fontsize=14&view=preview"
        title="useEffect vs useLayoutEffect"
        style={{
          width: "100%",
          height: 500,
          border: 0,
          borderRadius: 4,
          overflow: "hidden"
        }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </Paragraph>
    <Title id="usememo" style={styles.title}>
      <AnchorLink to="/hooks#usememo" />
      useMemo
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          A memoized value within a <Code>{`Pure Component`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useMemo();`}</Code> is a special use-case hook that acts
      similar to the <Code>{`useCallback();`}</Code> hook, except instead of
      memoizing the function, it memoizes a returned <Code>{`value`}</Code>.{" "}
      <strong>Why is this important?</strong> Memoizing a <Code>{`value`}</Code>{" "}
      can be beneficial if this <Code>{`value`}</Code> is derived from some
      heavy calcuation. The <Code>{`value`}</Code> will only be recalcuated if
      one of its <Code>{`[dependencies])`}</Code> has changed. Like{" "}
      <Code>{`useCallback();`}</Code>, it's structured to accept a callback
      function and an array of dependencies:{" "}
      <Code>{`useMemo(() => {}, [dependencies])`}</Code>. However, unlike{" "}
      <Code>{`useCallback();`}</Code>, if its array of{" "}
      <Code>{`[dependencies])`}</Code> is empty, then this{" "}
      <Code>{`value`}</Code> will be recalcuated for each new render! The
      primary use-case should be to optimize a component's performance during
      re-renders when we expect a <Code>{`value`}</Code> and its{" "}
      <Code>{`[dependencies])`}</Code> to have not changed despite component
      updates. A general rule of thumb should be to write the code to utilize a{" "}
      <Code>{`useCallback();`}</Code> hook, and if there's a noticeable
      performance degredation over time, then switch to a{" "}
      <Code>{`useMemo();`}</Code> hook.
    </Paragraph>
    <Title id="useref" style={styles.title}>
      <AnchorLink to="/hooks#useref" />
      useRef
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          A mutatable <Code>{`createRef();`}</Code>
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>
      The <Code>{`useRef();`}</Code> hook acts <strong>somewhat</strong> similar
      to React's <Code>{`createRef();`}</Code>, however, it's mutatable. The{" "}
      <Code>{`useRef();`}</Code> hook initilizes a <Code>{`ref`}</Code> object{" "}
      <Code>{`{}`}</Code> with a <Code>{`current`}</Code> property. This{" "}
      <Code>{`current`}</Code> property can be used to store a mutatable value.{" "}
      <strong>Why is this important?</strong> The <Code>{`ref`}</Code> object
      will be the same instance despite re-renders and unlike{" "}
      <Code>{`state`}</Code>, this value can be changed and it won't cause the
      component to re-render. This is primarily useful to track something that
      may affect <Code>{`state`}</Code>, but can't be attached to it.
    </Paragraph>
    <Paragraph>
      For example, let's say we want to build a <Code>{`setInterval`}</Code>{" "}
      timer that can be played, paused, and reset. We need to isolate the{" "}
      <Code>{`setInterval`}</Code> from our <Code>{`state`}</Code>.{" "}
      <strong>Why?</strong> Because we need <Code>{`setInterval`}</Code> to be
      assigned to a statically referenced variable so that despite updates, it
      remains the same <Code>{`setInterval`}</Code> we initiated. We don't want
      multiple instances of <Code>{`setInterval`}</Code> every time we update{" "}
      <Code>{`state`}</Code>. Therefore, <Code>{`useRef();`}</Code> is an
      excellent use-case for <Code>{`setInterval`}</Code> as it stays consistent
      across updates and it's mutatable -- we can{" "}
      <Code>{`setInterval();`}</Code> and <Code>{`clearInterval();`}</Code> the
      same <Code>{`ref`}</Code> object! To see it in action, check out the{" "}
      <Link style={styles.altlink} to="/examples/misc#intervaltimer">
        Interval Timer
      </Link>{" "}
      example.
    </Paragraph>
    <Title id="usestate" style={styles.title}>
      <AnchorLink to="/hooks#usestate" />
      useState
    </Title>
    <Paragraph>
      <Paragraph style={styles.eqivs}>Equilvalents:</Paragraph>
      <ul style={styles.list}>
        <ListItem>
          <Code>{`this.setState();`}</Code> with limitations
        </ListItem>
      </ul>
    </Paragraph>
    <Paragraph>Description coming soon.</Paragraph>
  </>
);

export default HooksAPI;

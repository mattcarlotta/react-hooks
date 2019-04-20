import React from "react";
import Helmet from "react-helmet";
import { Paragraph, Title } from "../../components/Body";

const Home = () => (
  <>
    <Helmet title="Home" />
    <Title>React Hooks</Title>
    <Paragraph>
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </Paragraph>
  </>
);

export default Home;

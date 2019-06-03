import React from "react";
import Helmet from "react-helmet";
import { FaGithub } from "react-icons/fa";
import CodesandboxSVG from "../../images/codesandbox";
import ReactHookLogo from "../../images/reactHookLogo.png";
import {
  Center,
  Button,
  Headline,
  Paragraph,
  SubTitle
} from "../../components/Body";
import { Line, Link } from "../../components/Navigation";

const styles = {
  line: { marginBottom: 20 },
  link: { textDecoration: "none" },
  subtitle: { marginTop: 0, marginBottom: 60 },
  title: { marginTop: 60 }
};

const Landing = () => (
  <>
    <Helmet title="A Simple Guide to Hooks" />
    <Center>
      <img src={ReactHookLogo} alt="ReactHookLogo.png" height="200px" />
      <Headline style={{ fontSize: 50, letterSpacing: 1 }}>
        React Hooks Guide
      </Headline>
      <Line style={styles.line} />
      <SubTitle style={styles.subtitle}>
        a simple guide for utilizing hooks
      </SubTitle>
      <Link to="/index">Get Started</Link>
    </Center>
    <SubTitle style={{ marginTop: 100 }}>About this guide</SubTitle>
    <Paragraph>
      This guide was created to help up-and-coming developers understand the ins
      and outs of using React Hooks. The guide is not a replacement for the{" "}
      <Button
        as="a"
        href="https://reactjs.org/docs/getting-started.html"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        Official ReactJS documentation
      </Button>
      , but instead, intended to complement it. In addition, this entire website
      was created just utilizing hooks and is available to everyone (click the
      Github <FaGithub /> or Codesandbox <CodesandboxSVG /> links in the header
      to view the source)!
    </Paragraph>
    <SubTitle style={{ marginTop: 60 }}>What it covers</SubTitle>
    <Paragraph>
      This guide covers what each React hook does, how to implement it, it's
      current limitations, and how to leverage them to be reusable. From simple
      forms to event listeners to 3rd party package implementations, this guide
      covers most of the basic needs that a developer will need for their
      application.
    </Paragraph>
    <SubTitle style={{ marginTop: 60 }}>Contact</SubTitle>
    <Paragraph>
      Find a mistake? Want to contribute your own example? Please feel free to{" "}
      <Button as="a" href="mailto:carlotta.matt@gmail.com" style={styles.link}>
        send me an email
      </Button>
      .
    </Paragraph>
  </>
);

export default Landing;

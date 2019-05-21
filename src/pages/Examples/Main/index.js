import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { ListItem, Paragraph, Title } from "../../../components/Body";
import { Link } from "../../../components/Navigation";

const mainLinks = [
  { name: "Event Listeners", link: "events" },
  { name: "Forms", link: "forms" },
  { name: "Form Elements", link: "forms/elements" },
  { name: "Miscelleanous", link: "misc" }
];

const Main = ({ match: { url } }) => (
  <>
    <Helmet title="Examples" />
    <Title>Examples</Title>
    <Paragraph>
      Below are some examples of using React Hooks.
      <ul>
        {mainLinks.map(({ name, link }) => (
          <ListItem key={name}>
            <Link to={`${url}/${link}`}>{name}</Link>
          </ListItem>
        ))}
      </ul>
    </Paragraph>
  </>
);

Main.propTypes = {
  url: PropTypes.string
};

export default Main;

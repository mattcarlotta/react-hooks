import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Crumb from "./Crumb";
import Divider from "./Divider";
import Page from "./Page";
import Title from "./Title";
import Link from "./Link";
import Line from "./Line";

const BreadCrumbNavigation = ({ location: { key, pathname } }) => {
  const paths = pathname.split("/").filter(path => path);
  const uniqueKey = key;

  return (
    <Breadcrumbs>
      {paths.map((path, key) => {
        const isActive = key === paths.length - 1;
        const crumb = paths.slice(0, key + 1).join("/");
        return (
          <Crumb key={`${path}-${uniqueKey}`}>
            <Page isActive={isActive}>
              {isActive ? (
                <Title>{path}</Title>
              ) : (
                <>
                  <Link to={`/${crumb}`}>{path}</Link>
                  <Divider>/</Divider>
                </>
              )}
            </Page>
          </Crumb>
        );
      })}
      <Line />
    </Breadcrumbs>
  );
};

BreadCrumbNavigation.propTypes = {
  key: PropTypes.string,
  pathname: PropTypes.string
};

export default withRouter(BreadCrumbNavigation);

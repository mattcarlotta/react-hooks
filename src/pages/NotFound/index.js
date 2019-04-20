import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import { Button, NotFoundContainer } from "../../components/Body";

const NotFound = ({ history }) => (
  <NotFoundContainer>
    <h1>
      <FaHouseDamage style={{ paddingTop: 5, marginRight: 10 }} />
      Page Not Found
    </h1>
    <Button onClick={() => history.goBack()}>Go Back</Button>
  </NotFoundContainer>
);

export default NotFound;

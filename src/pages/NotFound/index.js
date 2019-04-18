import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import { Link } from "../../components/Navigation";
import { NotFoundContainer, Title } from "../../components/Body";

const NotFound = () => (
  <NotFoundContainer>
    <h1>
      <FaHouseDamage style={{ paddingTop: 5, marginRight: 10 }} />
      Page Not Found
    </h1>
    <Link color="primary" link="/">
      Go Back
    </Link>
  </NotFoundContainer>
);

export default NotFound;

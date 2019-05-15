import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FaRedoAlt } from "react-icons/fa";
import {
  BlockContainer,
  Button,
  Column,
  DataContainer,
  DisplayData,
  DataPlaceholder,
  Row,
  ShowCode,
  ShowCodeButton,
  SubTitle
} from "../../../Body";
import { AnchorLink } from "../../../Navigation";
import { useFetchData, useToggle } from "../../../Hooks";

const styles = {
  column1: {
    padding: "10px 0 0 0"
  },
  column2: {
    padding: "10px 0",
    textAlign: "center"
  },
  form: {
    padding: "0"
  },
  refresh: {
    width: "100%"
  },
  row: {
    padding: "0 0 5px 0"
  },
  showCodeButton: {
    float: "right"
  }
};

const FetchDataExample = ({ innerRef }) => {
  const { data, fetchData, refreshData } = useFetchData();
  const [showCode, toggleShowCode] = useToggle(false);

  useEffect(
    () => {
      if (data.isLoading) {
        fetchData();
      }
    },
    [data.isLoading, fetchData]
  );

  return (
    <>
      <SubTitle ref={innerRef}>
        <AnchorLink to="/examples/misc#fetchingandupdatingdata" />
        Fetching and Updating Data
      </SubTitle>
      <BlockContainer>
        <Row>
          <Column width="75%">
            <BlockContainer style={styles.column1}>
              <BlockContainer style={styles.column2}>
                <DataContainer>
                  {data.isLoading ? (
                    <DataPlaceholder />
                  ) : (
                    <DisplayData {...data} />
                  )}
                </DataContainer>
              </BlockContainer>
              <BlockContainer style={styles.row}>
                <Button onClick={refreshData} style={styles.refresh}>
                  <FaRedoAlt /> Refresh Data
                </Button>
              </BlockContainer>
            </BlockContainer>
          </Column>
          <Column width="25%" align="flex-end" style={styles.column2}>
            <ShowCodeButton
              style={styles.showCodeButton}
              showCode={showCode}
              toggleShowCode={toggleShowCode}
            />
          </Column>
        </Row>
      </BlockContainer>
      <ShowCode showCode={showCode} fileName="Misc/FetchData.js" />
    </>
  );
};

FetchDataExample.propTypes = {
  innerRef: PropTypes.func.isRequired
};

export default FetchDataExample;

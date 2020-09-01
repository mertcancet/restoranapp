import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import Tabless from "../Tables/Tables1";
import "./MainScreen.css";

function MainScreen(props) {
  const [key, setKey] = useState("ic-mekan");
  return (
    <div className="mainScreen">
      <Container>
        <Card className="tableCard mt-3">
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              {props.area.map((mekan) => (
                <Tab
                  key={mekan.areaId}
                  eventKey={mekan.areaId}
                  title={mekan.areaName}
                >
                  {props.table.map((masa) =>
                    masa.areaId === mekan.areaId ? (
                      <Tabless key={Math.random()} tableName={masa.tableName} />
                    ) : (
                      ""
                    )
                  )}
                </Tab>
              ))}
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    area: state.area,
    table: state.table,
  };
};

export default connect(mapStateToProps)(MainScreen);

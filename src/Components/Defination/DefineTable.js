import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import Tables from "../Tables/Tables";

const DefineTable = (props) => {
  const [key, setKey] = useState("ic-mekan");

  return (
    <div>
      <Container>
        <Card className="tableCard mt-3">
          <Card.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="ic-mekan" title="İç Mekan">
                <div className="my-2">
                  <Tables />
                </div>
              </Tab>

              {props.mekan.map((mekan) => (
                <Tab eventKey={mekan.mekanId} title={mekan.mekanAdi}></Tab>
              ))}
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mekan: state.mekan,
    masa: state.masa,
  };
};

export default connect(mapStateToProps)(DefineTable);

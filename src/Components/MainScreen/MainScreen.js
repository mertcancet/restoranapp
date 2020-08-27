import React, { useState } from "react";
import { Container, Card, Tabs, Tab } from "react-bootstrap";
import Tables from "../Tables/Tables";
import "./MainScreen.css";

function MainScreen() {
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
              <Tab eventKey="ic-mekan" title="İç Mekan">
                <div className="my-2">
                  <Tables />
                </div>
              </Tab>
              <Tab eventKey="bahce" title="Bahce">
                <div className="my-2">
                  <Tables />
                </div>
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default MainScreen;

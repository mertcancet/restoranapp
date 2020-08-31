import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Tabs, Tab, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tables from "../Tables/Tables";
import "./Definetable.css";
const DefineTable = (props) => {
  const [key, setKey] = useState("");

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
              {props.mekan.map((mekan) => (
                <Tab eventKey={mekan.mekanId} title={mekan.mekanAdi}>
                  <Button variant="outline-danger" className="m-3 addTableBtn">
                    Bölge İsmi Değiştir
                  </Button>
                  <Button variant="outline-danger" className="m-3 addTableBtn">
                    Bölge Sil
                  </Button>
                  <br />
                  {props.masa.map((masa) =>
                    masa.mekanId === mekan.mekanId ? (
                      <button className="tableBtn mx-2 my-1">
                        {masa.masaAdi}
                      </button>
                    ) : (
                      ""
                    )
                  )}
                  <Button variant="danger" className="addTableBtn">
                    Masa Ekle
                  </Button>
                </Tab>
              ))}
              <Tab eventKey="mekan-ekle" title="Bölge Ekle"></Tab>
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

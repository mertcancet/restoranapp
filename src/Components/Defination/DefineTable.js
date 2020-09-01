import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Card, Tabs, Tab, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Definetable.css";
import { addArea, deleteArea } from "../actions/action";

const DefineTable = (props) => {
  const [key, setKey] = useState("");
  const [show, setShow] = useState(false);

  const [areaName, setAreaName] = useState("");

  const [showChangeAraeName, setShowChangeAraeName] = useState(false);

  const handleCloseChangeAreaNameModal = () => setShowChangeAraeName(false);
  const handleShowChangeAreaNameModal = () => setShowChangeAraeName(true);

  const handleClose = () => {
    setShow(false);
    setAreaName("");
  };
  const handleShow = () => setShow(true);

  function addAreaHandle(e) {
    setAreaName(e);
    console.log(e);
  }
  function addAreaSubmit(e) {
    e.preventDefault();
    console.log("submit", areaName);
    props.addArea(areaName);
    setShow(false);
  }

  function deleteAreaHandle(id) {
    console.log("delete", id);
    props.deleteArea(id);
  }
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
              {props.area.map((mekan) => (
                <Tab
                  key={mekan.areaId}
                  eventKey={mekan.areaId}
                  title={mekan.areaName}
                >
                  <h1>mekan adı:{mekan.areaId}</h1>
                  <Button
                    key={Math.random()}
                    variant="outline-danger"
                    className="m-3 addTableBtn"
                    onClick={handleShowChangeAreaNameModal}
                  >
                    Bölge İsmi Değiştir
                  </Button>
                  <Button
                    key={mekan.areaId}
                    variant="outline-danger"
                    className="m-3 addTableBtn"
                    onClick={() => deleteAreaHandle(mekan.areaId)}
                  >
                    Bölge Sil
                  </Button>
                  <Button
                    className="m-3 addTableBtn"
                    variant="danger"
                    onClick={handleShow}
                  >
                    Bölge Ekle
                  </Button>
                  <br />
                  {props.table.map((masa) =>
                    masa.areaId === mekan.areaId ? (
                      <button key={masa.tableId} className="tableBtn mx-2 my-1">
                        {masa.tableName}
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
            </Tabs>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bölge Ekle</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => addAreaSubmit(e)}>
            <Modal.Body>
              <p>Bölge İsmini Giriniz</p>
              <input onChange={(e) => addAreaHandle(e.target.value)}></input>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Kapat
              </Button>
              <Button variant="primary" type="submit">
                Kaydet
              </Button>
            </Modal.Footer>
          </form>
        </Modal>



        

        <Modal
          show={showChangeAraeName}
          onHide={handleCloseChangeAreaNameModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bölge İsmi Değiştir</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Bu isimli yerin adınıı BURAYA PROPS GECİLCEKK</p>
            <input></input>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleCloseChangeAreaNameModal}
            >
              Kapat
            </Button>
            <Button variant="danger" onClick={handleCloseChangeAreaNameModal}>
              Kaydet
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    area: state.area,
    table: state.table,
  };
};

export default connect(mapStateToProps, { addArea, deleteArea })(DefineTable);

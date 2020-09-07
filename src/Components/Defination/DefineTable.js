import React, { useState } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Definetable.css";
import {
  addArea,
  deleteArea,
  updateArea,
  addTable,
  deleteTable,
  updateTable,
} from "../actions/action";

const DefineTable = (props) => {
  //DEFINE TABLE STATE//
  const [tableIdForModal, setTableIdForModal] = useState();
  const [tableNameForRedux, setTableNameForRedux] = useState("");

  //MODAL STATE//
  const [key, setKey] = useState("");
  const [show, setShow] = useState(false);
  const [areaName, setAreaName] = useState("");
  const [editAreaName, setEditAreaName] = useState("");
  const [showChangeAraeName, setShowChangeAraeName] = useState(false);
  const [editTableModalShow, setEditTableModalShow] = useState(false);

  const editTableModalHandleClose = () => setEditTableModalShow(false);
  const editTableModalHandleShow = () => setEditTableModalShow(true);

  const handleShow = () => setShow(true);
  const handleCloseChangeAreaNameModal = () => {
    setShowChangeAraeName(false);
  };
  const handleShowChangeAreaNameModal = () => setShowChangeAraeName(true);

  const handleClose = () => {
    setShow(false);
    setAreaName("");
  };

  function addAreaHandle(e) {
    setAreaName(e);
  }
  function addAreaSubmit(e) {
    e.preventDefault();
    props.addArea(areaName);
    setShow(false);
  }

  function deleteAreaHandle(id) {
    props.deleteArea(id);
  }

  function areaNameUpdateSubmit(e, areaId) {
    e.preventDefault();
    props.updateArea(areaId, editAreaName);
  }

  function addTableHandle(areaId) {
    props.addTable(areaId);
  }
  function deleteTableHandle(e, tableId) {
    e.stopPropagation();
    props.deleteTable(tableId);
  }
  function editTableName(tableId) {
    editTableModalHandleShow();
    setTableIdForModal(tableId);
  }
  function editTableHandle(e) {
    e.preventDefault();

    console.log("input value", tableNameForRedux);
    console.log("tableId:", tableIdForModal);
    props.updateTable(tableIdForModal, tableNameForRedux);
  }

  // console.log("props geldi", props);
  return (
    <div>
      <div className="container">
        <div className="card tableCard mt-3">
          <div>
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
                  <div className="card-body">
                    <form
                      className="alert alert-primary m-5"
                      onSubmit={(e) => areaNameUpdateSubmit(e, mekan.areaId)}
                    >
                      <h1>mekan adı:{mekan.areaName}</h1>
                      <input
                        onChange={(e) => setEditAreaName(e.target.value)}
                      ></input>
                      <button type="submit" className="alert alert-danger">
                        Bölge ismini değiştir
                      </button>
                    </form>

                    <button
                      key={Math.random()}
                      variant="outline-danger"
                      className="btn btn-danger m-3 addTableBtn"
                      onClick={handleShowChangeAreaNameModal}
                    >
                      Bölge İsmi Değiştir
                    </button>
                    <button
                      key={mekan.areaId}
                      variant="outline-danger"
                      className="btn btn-danger m-3 addTableBtn"
                      onClick={() => deleteAreaHandle(mekan.areaId)}
                    >
                      Bölge Sil
                    </button>
                    <button
                      className="btn btn-danger m-3 addTableBtn"
                      variant="danger"
                      onClick={handleShow}
                    >
                      Bölge Ekle
                    </button>
                    <br />

                    <button
                      variant="danger"
                      className="btn btn-danger addTableBtn"
                      onClick={() => addTableHandle(mekan.areaId)}
                    >
                      Masa Ekle{}
                    </button>
                    {props.table.map((masa) =>
                      masa.areaId === mekan.areaId ? (
                        <button
                          key={masa.tableId}
                          className="tableBtn mx-2 my-1"
                          onClick={() => editTableName(masa.tableId)}
                        >
                          {masa.tableName}
                          <button
                            type="button"
                            className="close "
                            aria-label="Close"
                            onClick={(e) => deleteTableHandle(e, masa.tableId)}
                          >
                            <span aria-hidden="true" className="text-white">
                              &times;
                            </span>
                          </button>
                        </button>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>

        <Modal show={editTableModalShow} onHide={editTableModalHandleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Masa Adı Güncelle</Modal.Title>
          </Modal.Header>
          <form onSubmit={(e) => editTableHandle(e)}>
            <Modal.Body>
              <p className="d-inline">Masa Adı Giriniz: </p>
              <input
                className="d-inline"
                onChange={(e) => setTableNameForRedux(e.target.value)}
              ></input>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={editTableModalHandleClose}>
                Kapat
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={editTableModalHandleClose}
              >
                Kaydet
              </Button>
            </Modal.Footer>
          </form>
        </Modal>

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
            <p>isimli yerin adını değiştiriyosunuz</p>
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    area: state.area,
    table: state.table,
  };
};

export default connect(mapStateToProps, {
  addArea,
  deleteArea,
  updateArea,
  addTable,
  deleteTable,
  updateTable,
})(DefineTable);

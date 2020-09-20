import React, { useState } from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Button, Modal } from "react-bootstrap";
import "./Definetable.css";

import {
  addArea,
  deleteArea,
  updateArea,
  addTable,
  deleteTable,
  updateTable,
} from "../../../actions/action";

const DefineTable = (props) => {
  //-DEFINE TABLE STATE//
  const [tableIdForModal, setTableIdForModal] = useState();
  const [tableNameForRedux, setTableNameForRedux] = useState("");
  //-EDIT AREA NAME STATE//
  const [editAreaId, setEditAreaId] = useState();
  const [editAreaName, setEditAreaName] = useState("");
  //-MODAL STATE//
  const [key, setKey] = useState("");
  const [show, setShow] = useState(false);
  const [areaName, setAreaName] = useState("");
  const [showChangeAraeName, setShowChangeAraeName] = useState(false);
  const [editTableModalShow, setEditTableModalShow] = useState(false);

  //-SHOW MODAL FUNCTIONS
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

  //-ADD AREA FUNCTIONS
  function addAreaHandle(e) {
    setAreaName(e);
  }
  function addAreaSubmit(e) {
    e.preventDefault();
    props.addArea(areaName);
    setShow(false);
  }
  //-ADD TABLE FUNCTION
  function addTableHandle(areaId) {
    props.addTable(areaId);
  }
  //-DELETE AREA FUNCTIONS
  function deleteAreaHandle(id) {
    props.deleteArea(id);
  }
  //-DELETE TABLE FUNCTIONS
  function deleteTableHandle(e, tableId) {
    e.stopPropagation();
    props.deleteTable(tableId);
  }
  //-EDIT TABLE NAME FUNCTIONS
  function editTableName(tableId) {
    editTableModalHandleShow();
    setTableIdForModal(tableId);
  }
  function editTableHandle(e) {
    e.preventDefault();

    props.updateTable(tableIdForModal, tableNameForRedux);
  }
  //-EDIT AREA NAME FUNCTIONS
  function areaNameUpdateSubmit(e, areaId) {
    e.preventDefault();
    props.updateArea(areaId, editAreaName);
  }

  function editAreaHandle(areaId) {
    setEditAreaId(areaId);
    handleShowChangeAreaNameModal();
  }

  // --  console.log("props geldi", props);
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
                  <div className=" addTable-container">
                    <button
                      key={Math.random()}
                      variant="outline-danger"
                      className="btn btn-danger m-3 addTableBtn"
                      onClick={() => editAreaHandle(mekan.areaId)}
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
                      className="btn btn-danger addTableBtn ml-2"
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

          <form onSubmit={(e) => areaNameUpdateSubmit(e, editAreaId)}>
            <Modal.Body>
              <p>isimli yerin adını değiştiriyosunuz</p>
              <input onChange={(e) => setEditAreaName(e.target.value)}></input>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleCloseChangeAreaNameModal}
              >
                Kapat
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={handleCloseChangeAreaNameModal}
              >
                Kaydet
              </Button>
            </Modal.Footer>
          </form>
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

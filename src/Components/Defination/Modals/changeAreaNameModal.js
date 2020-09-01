import React from "react";
import { Modal, Button } from "react-bootstrap";

const changeAreaNameModal = (props) => {
  return (
    <Modal show={showChangeAraeName} onHide={handleCloseChangeAreaNameModal}>
      <Modal.Header closeButton>
        <Modal.Title>Bölge İsmi Değiştir</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> Bu isimli yerin adınıı BURAYA PROPS GECİLCEKK</p>
        <input></input>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseChangeAreaNameModal}>
          Kapat
        </Button>
        <Button variant="danger" onClick={handleCloseChangeAreaNameModal}>
          Kaydet
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default changeAreaNameModal();

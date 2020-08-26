import React, { useState } from "react";
import { Container, Nav, Button, Card, Modal, Col, Row } from "react-bootstrap";
import "./MainScreen.css";

function MainScreen() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="mainScreen">
      <Container>
        <Card className="tableCard mt-3">
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">İçeri</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Dışarı</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <button className="tableBtn mx-2 my-1">Masa 1</button>
            <button className="tableBtn mx-2 my-1">Masa 2</button>
            <button className="tableBtn mx-2 my-1">Masa 3</button>
          </Card.Body>
        </Card>
      </Container>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sipariş Ekranı
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Card className="tableCard mt-3">
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link href="#first">İçeri</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#link">Dışarı</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                </Card>
              </Col>
              <Col xs={6} md={4}>
                <Button></Button>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MainScreen;

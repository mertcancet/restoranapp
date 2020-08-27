import React, { useState } from "react";
import {
  Container,
  Nav,
  Button,
  Card,
  Modal,
  Col,
  Row,
  Table,
} from "react-bootstrap";
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
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 1
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 2
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 3
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 4
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 5
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 6
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 7
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 8
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 9
            </button>
            <button
              className="tableBtn mx-2 my-1"
              onClick={() => setLgShow(true)}
            >
              Masa 10
            </button>
          </Card.Body>
        </Card>
      </Container>

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
              <Col xs={12} md={7}>
                <Card className="tableCard mt-3">
                  <Card.Header>Kategoriler</Card.Header>
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link href="#Anayemek">Ana Yemek</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#tatli">Tatlı</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#icecek">İçecek</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                </Card>
              </Col>
              <Col xs={12} md={5}>
                <Card className="tableCard--orderList mt-3">
                  <Card.Header> Siparişler</Card.Header>
                  <Card.Body>
                    <Table bordered hover size="sm" responsive="md">
                      <thead>
                        <tr>
                          <th>Adet</th>
                          <th>Ürün Adı</th>
                          <th>Fiyatı</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                        </tr>

                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card.Body>
                  <Card.Footer className="text-right">
                    Sipariş Tutarı: <b>100 TL</b>
                  </Card.Footer>
                </Card>
                <Button className="mt-3" variant="danger" size="lg" block>
                  Hesap Al
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MainScreen;

import React, { useState } from "react";
import {
  Modal,
  Nav,
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
} from "react-bootstrap";
import "./Tables.css";

function Tables() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 1
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 2
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 3
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 4
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 5
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 6
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 7
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 8
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 9
      </button>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 10
      </button>

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
              <Col xs={12} md={6}>
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
              <Col xs={12} md={6}>
                <Card className="tableCard--orderList mt-3">
                  <Card.Header> Siparişler</Card.Header>
                  <Card.Body>
                    <div className="orderlist-detail">
                      <Table
                        bordered
                        hover
                        size="sm"
                        responsive="md"
                        className="noWrap"
                      >
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
                    </div>
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

export default Tables;

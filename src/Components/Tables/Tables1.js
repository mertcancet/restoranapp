import React, { useState } from "react";
import {
  Modal,
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";

function Tables() {
  const [lgShow, setLgShow] = useState(false);
  const [key, setKey] = useState("ic-mekan");

  return (
    <div>
      <button className="tableBtn mx-2 my-1" onClick={() => setLgShow(true)}>
        Masa 1
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
                  <Card.Body>
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                    >
                      <Tab eventKey="ana-yemek" title="Ana Yemek">
                        <div className="my-2">Ana Yemek</div>
                      </Tab>
                      <Tab eventKey="ara-sicak" title="Ara Sıcak">
                        <Card.Body>
                          <div className="my-2">Ara Sıcak</div>
                        </Card.Body>
                      </Tab>
                      <Tab eventKey="icecek" title="İçecek">
                        <div className="my-2">İçecek</div>
                      </Tab>
                    </Tabs>
                  </Card.Body>
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

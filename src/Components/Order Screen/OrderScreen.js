import React, { useState } from "react";
import {
  Modal,
  Card,
  Container,
  Row,
  Col,
  Table,
  Button,
  Accordion,
} from "react-bootstrap";
import { connect } from "react-redux";
import "./OrderScreen.css";
function Tables(props) {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="m-1 d-inline">
        <button className="tableBtn  mt-2" onClick={() => setLgShow(true)}>
          {props.tableName}
        </button>
      </div>

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
                <Accordion className=" mt-3 categoryAccordion ">
                  {props.category.map((category) => (
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey={category.categoryId}
                        >
                          {category.categoryName}
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={category.categoryId}>
                        <div className="categoryCard">
                          <Table
                            bordered
                            hover
                            size="sm"
                            responsive="md"
                            className="noWrap"
                          >
                            <thead>
                              <tr>
                                <th>Ürün Adı</th>
                                <th>Fiyatı</th>
                              </tr>
                            </thead>
                            <tbody>
                              {props.product.map((product) => {
                                if (
                                  parseFloat(product.categoryId) ===
                                  parseFloat(category.categoryId)
                                )
                                  return (
                                    <tr>
                                      <td>{product.productName}</td>
                                      <td>{product.productPrice}TL</td>
                                    </tr>
                                  );
                              })}
                            </tbody>
                          </Table>
                        </div>
                      </Accordion.Collapse>
                    </Card>
                  ))}
                </Accordion>
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    category: state.category,
    product: state.product,
  };
};

export default connect(mapStateToProps, {})(Tables);

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { updateProduct, deleteProduct } from "../../../../../actions/action";
const Products = (props) => {
  const [updateProductName, setUpdateProductName] = useState("");
  const [updateProductPrice, setUpdateProductPrice] = useState("");
  const [updateProductId, setUpdateProductId] = useState("");

  const [updateProductShow, setUpdateProductShow] = useState(false);
  const Category = parseFloat(props.Category);

  const updateProductHandleClose = () => {
    setUpdateProductShow(false);
  };

  function updateProductIdHandle(productId) {
    setUpdateProductId(productId);
    setUpdateProductShow(true);
  }

  function updateProductHandle(e) {
    e.preventDefault();
    props.updateProduct(updateProductId, updateProductName, updateProductPrice);
    setUpdateProductName("");
    setUpdateProductPrice("");
    setUpdateProductId("");
  }

  function deleteProductHandle(productId) {
    console.log({ productId });
    props.deleteProduct(productId);
  }
  console.log(props.product);
  return (
    <div>
      <table className="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Ürün İsmi</th>
            <th scope="col">Fiyatı</th>
            <th scope="col"> Düzenle </th>
          </tr>
        </thead>
        <tbody>
          {props.product.map((product) => {
            if (parseFloat(product.categoryId) === Category)
              return (
                <tr key={product.productId}>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}TL</td>
                  <td>
                    <span
                      className=" badge badge-warning cursor btn "
                      onClick={() => updateProductIdHandle(product.productId)}
                    >
                      Düzenle
                    </span>
                    <span
                      className="badge badge-warning ml-2 btn"
                      onClick={() => deleteProductHandle(product.productId)}
                    >
                      Sil
                    </span>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>

      <Modal show={updateProductShow} onHide={updateProductHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ürün Bilgeleri Düzenle</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => updateProductHandle(e)}>
          <Modal.Body>
            <div className="form-group mt-3">
              <label className="d-inline ml-2"> Ürün Adını giriniz</label>
              <input
                className=" ml-2 d-inline form-group"
                onChange={(e) => setUpdateProductName(e.target.value)}
              ></input>
            </div>
            <label className="d-inline"> Ürün Fiyatını giriniz</label>
            <input
              type="number"
              min="0"
              className=" ml-2 d-inline form-group"
              onChange={(e) => setUpdateProductPrice(e.target.value)}
            ></input>
            <label className="ml-1">TL</label>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={updateProductHandleClose}
            >
              Kapat
            </button>
            <button
              className="btn btn-danger"
              onClick={updateProductHandleClose}
              type="submit"
            >
              Ürün Bilgilerini Düzenle
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, { updateProduct, deleteProduct })(
  Products
);

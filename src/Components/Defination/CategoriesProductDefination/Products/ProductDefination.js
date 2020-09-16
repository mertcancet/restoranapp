import React, { useState } from "react";
import { connect } from "react-redux";
import "./ProductDefination.css";
import { addProduct } from "../../../../actions/action";
const ProductDefination = (props) => {
  //--PRODUCT STATE
  const [addProductName, setAddProductName] = useState();
  const [addProductPrice, setAddProductPrice] = useState();
  const [addProductCategory, setAddProductCategory] = useState();
  //--PRODUCT FUNCTION
  function addProductHandle(e) {
    e.preventDefault();
    props.addProduct(addProductCategory, addProductName, addProductPrice);
  }

  return (
    <div className="card m-3 products">
      <h1 className="text-center">Ürün Ekleme</h1>
      <form className="m-2" onSubmit={(e) => addProductHandle(e)}>
        <div className="col-auto">
          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Kategori</label>

            <div className="col-md-6 col-xl-4">
              <select
                className="form-control"
                onChange={(e) => setAddProductCategory(e.target.value)}
              >
                <option defaultValue>Kategori Seciniz</option>
                {props.category.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Ürün Adı</label>
            <div className="col-md-6 col-xl-4">
              <input
                className="form-control"
                onChange={(e) => setAddProductName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Fiyat</label>
            <div className="col-md-6 col-xl-4 ">
              <input
                type="number"
                className="form-control"
                min="0"
                onChange={(e) => setAddProductPrice(e.target.value)}
              />
            </div>
            <label className=" col-form-label text-sm-right">TL</label>
          </div>
        </div>

        <div className="form-group row mx-auto text-md-right">
          <label className="col-md-4 col-form-label ">Stok Takibi</label>
          <div className="col-md-4 custom-control custom-switch">
            <div className="custom-control custom-switch float-left pt-2">
              <input
                type="checkbox"
                className="custom-control-input "
                id="customSwitch1"
              />

              <label className="custom-control-label" htmlFor="customSwitch1">
                Adet
              </label>
            </div>
          </div>
        </div>
        <div className="col-auto row">
          <div className="col-md-7"></div>
          <div className="col-xl-2 ">
            <button
              className="btn btn-danger products__addButton"
              type="submit"
            >
              Ürün Ekle/Düzenle
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    category: state.category,
    product: state.product,
  };
};
export default connect(mapStateToProps, { addProduct })(ProductDefination);

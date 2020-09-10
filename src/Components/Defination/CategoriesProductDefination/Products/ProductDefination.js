import React from "react";

const ProductDefination = () => {
  return (
    <div className="card m-3">
      <h1 className="text-center">Ürün Ekleme</h1>
      <form className="m-2">
        <div className="col-auto">
          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Kategori</label>
            <div className="col-md-4">
              <select className="form-control">
                <option defaultValue>İçeçekler</option>
                <option>Ana Yemek</option>
                <option>Tatlı</option>
              </select>
            </div>
          </div>

          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Ürün Adı</label>
            <div className="col-md-4">
              <input className="form-control" />
            </div>
          </div>

          <div className="form-group row mx-auto text-md-right">
            <label className="col-md-4 col-form-label ">Fiyat</label>
            <div className="col-md-4">
              <input type="number" className="form-control" />
            </div>
            <label className=" col-form-label">TL</label>
          </div>
        </div>

        <div className="form-group row mx-auto text-md-right">
          <label className="col-md-4 col-form-label ">Stok Takibi</label>
          <div className="col-md-4 custom-control custom-switch">
            <div className="custom-control custom-switch float-left pt-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customSwitch1"
              />

              <label className="custom-control-label" for="customSwitch1">
                Adet
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ProductDefination;

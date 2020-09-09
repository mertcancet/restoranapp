import React from "react";
import "./CategoriesProductDefination.css";
import CategoriesDefination from "./Categories/CategoriesDefination";
const CategoriesProductDefination = () => {
  return (
    <div>
      <h1>KATEGORİ VE ÜRÜN TANIMLAMA</h1>
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-4 col-lg-2 border border-primary">
          <CategoriesDefination />
        </div>
        <div className="col-sm-12 col-md-8  col-lg-10 border border-danger">
          col-sm-10
        </div>
      </div>
    </div>
  );
};

export default CategoriesProductDefination;
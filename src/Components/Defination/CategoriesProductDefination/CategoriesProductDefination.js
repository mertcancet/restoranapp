import React from "react";
import "./CategoriesProductDefination.css";
import CategoriesDefination from "./Categories/CategoriesDefination";
import ProductDefination from "./Products/ProductDefination";
const CategoriesProductDefination = () => {
  return (
    <div>
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-4 col-lg-2">
          <CategoriesDefination />
        </div>
        <div className="col-sm-12 col-md-8  col-lg-10 ">
          <ProductDefination />
        </div>
      </div>
    </div>
  );
};

export default CategoriesProductDefination;

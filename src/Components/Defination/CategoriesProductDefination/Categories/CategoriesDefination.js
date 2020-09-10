import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import "./CategoriesDefination.css";
import Products from "./Products/Products";
const CategoriesDefination = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="btn btn-danger border border-top categoriesButton mb-2">
        Kategori Ekle
      </button>

      <button
        className="btn btn-secondary categoriesButton"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        İçeçekler
      </button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <button className="btn btn-success editButton">
            Kategori Düzenle
          </button>
          <button className="btn btn-danger deleteButton">Kategori Sil</button>

          <Products />
        </div>
      </Collapse>
    </div>
  );
};
export default CategoriesDefination;

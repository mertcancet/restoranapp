import React, { useState } from "react";
import { Collapse, Modal } from "react-bootstrap";
import "./CategoriesDefination.css";
import Products from "./Products/Products";

import { addCategory } from "../../../actions/action";
import { connect } from "react-redux";

const CategoriesDefination = (props) => {
  const [open, setOpen] = useState(false);

  //ADD CATEGORY MODAL
  const [addCategoriesShow, setAddCategoriesShow] = useState(false);
  const addCategoriesHandleClose = () => setAddCategoriesShow(false);
  const addCategoriesHandleShow = () => setAddCategoriesShow(true);

  // CATEGORY STATE
  const [addCategory, setAddCategory] = useState();

  //CATEGORY FUNCTION
  function addCategoryHandle(e) {
    e.preventDefault();
    props.addCategory(addCategory);
  }

  console.log("props.category", props.category);
  return (
    <div className="categories">
      <button
        className="btn btn-danger border border-top categoriesButton mb-2"
        onClick={addCategoriesHandleShow}
      >
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

      {props.category.map((category) => (
        <div>
          <button
            className="btn btn-secondary categoriesButton"
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            {category.categoryName}
          </button>

          <Collapse in={open}>
            <div id="example-collapse-text">
              <button className="btn btn-success editButton">
                Kategori Düzenle
              </button>
              <button className="btn btn-danger deleteButton">
                Kategori Sil
              </button>

              <Products />
            </div>
          </Collapse>
        </div>
      ))}

      {/*  ADD CATEGORY MODAL */}

      <Modal show={addCategoriesShow} onHide={addCategoriesHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kategori Ekle</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => addCategoryHandle(e)}>
          <Modal.Body>
            <div className="form-group mt-3">
              <label className="d-inline"> Kategori Adını giriniz</label>
              <input
                className=" ml-2 d-inline form-group"
                onChange={(e) => setAddCategory(e.target.value)}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={addCategoriesHandleClose}
            >
              Kapat
            </button>
            <button
              className="btn btn-danger"
              onClick={addCategoriesHandleClose}
              type="submit"
            >
              Kategori Ekle
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};
export default connect(mapStateToProps, { addCategory })(CategoriesDefination);

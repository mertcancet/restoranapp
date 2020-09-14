import React, { useState } from "react";
import { Collapse, Modal } from "react-bootstrap";
import "./CategoriesDefination.css";
import Products from "./Categories-Product/Products";

import {
  addCategory,
  deleteCategory,
  showCategoryDetail,
  updateCategory,
} from "../../../../actions/action";
import { connect } from "react-redux";

const CategoriesDefination = (props) => {
  //-ADD CATEGORY MODAL
  const [addCategoriesShow, setAddCategoriesShow] = useState(false);
  const addCategoriesHandleClose = () => setAddCategoriesShow(false);
  const addCategoriesHandleShow = () => setAddCategoriesShow(true);

  //-UPDATE CATEGORY MODAL
  const [updateCategoriesShow, setUpdateCategoriesShow] = useState(false);
  const updateCategoriesHandleClose = () => setUpdateCategoriesShow(false);

  //- CATEGORY STATE
  const [addCategory, setAddCategory] = useState();
  const [updateCategory, setUpdateCategory] = useState();
  const [updateCategoryId, setUpdateCategoryId] = useState();

  //-CATEGORY FUNCTION
  function addCategoryHandle(e) {
    e.preventDefault();
    props.addCategory(addCategory);
  }
  function updateCategoryHandle(e) {
    e.preventDefault();
    console.log("update category", updateCategory);
    console.log("categoyId", updateCategoryId);
    props.updateCategory(updateCategoryId, updateCategory);
  }
  function showUpdateCategoryModal(categoryId) {
    setUpdateCategoriesShow(true);
    setUpdateCategoryId(categoryId);
  }
  function deleteCategoryHandle(categoryId) {
    props.deleteCategory(categoryId);
  }
  function openCategoryDetail(categoryId) {
    props.showCategoryDetail(categoryId);
  }

  //- console.log(props);
  return (
    <div className="categories card mt-3 ">
      <button
        className="btn btn-danger border border-top categoriesButton mb-2 sticky-top"
        onClick={addCategoriesHandleShow}
      >
        Kategori Ekle
      </button>
      {props.category.map((category) => (
        <div key={category.categoryId}>
          <button
            className="btn btn-secondary categoriesButton"
            onClick={() => openCategoryDetail(category.categoryId)}
            aria-controls="example-collapse-text"
            aria-expanded={category.openStatus}
          >
            {category.categoryName}
          </button>

          <Collapse in={category.openStatus}>
            <div id="example-collapse-text">
              <button
                className="btn btn-success editButton"
                onClick={() => showUpdateCategoryModal(category.categoryId)}
              >
                Kategori Düzenle
              </button>
              <button
                className="btn btn-danger deleteButton"
                onClick={() => deleteCategoryHandle(category.categoryId)}
              >
                Kategori Sil
              </button>

              <Products Category={category.categoryId} />
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

      {/* UPDATE CATEGORY MODAL*/}

      <Modal show={updateCategoriesShow} onHide={updateCategoriesHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kategori Adı Düzenle</Modal.Title>
        </Modal.Header>
        <form onSubmit={(e) => updateCategoryHandle(e)}>
          <Modal.Body>
            <div className="form-group mt-3">
              <label className="d-inline"> Yeni Kategori Adını giriniz</label>
              <input
                className=" ml-2 d-inline form-group"
                onChange={(e) => setUpdateCategory(e.target.value)}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={updateCategoriesHandleClose}
            >
              Kapat
            </button>
            <button
              className="btn btn-danger"
              onClick={updateCategoriesHandleClose}
              type="submit"
            >
              Kategori Adı Düzenle
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
export default connect(mapStateToProps, {
  addCategory,
  deleteCategory,
  showCategoryDetail,
  updateCategory,
})(CategoriesDefination);

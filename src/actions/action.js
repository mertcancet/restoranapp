//-AREAS
export const ADD_AREA = "ADD_AREA";
export const DELETE_AREA = "DELETE_AREA";
export const UPDATE_AREA = "UPDATE_AREA";
//-TABLES
export const ADD_TABLE = "ADD_TABLE";
export const DELETE_TABLE = "DELETE_TABLE";
export const UPDATE_TABLE = "UPDATE_TABLE";
//-CATEGORY
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const SHOW_CATEGORY_DETAIL = "SHOW_CATEGORY_DETAIL";

//-PRODUCT
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
//!

//                 ----

//!

//-AREA
export const addArea = (area) => {
  return { type: ADD_AREA, payload: area };
};
export const deleteArea = (area) => {
  return { type: DELETE_AREA, payload: area };
};
export const updateArea = (id, newAreaName) => {
  return { type: UPDATE_AREA, payload: { id, newAreaName } };
};

//-TABLE
export const addTable = (areaId) => {
  return { type: ADD_TABLE, payload: areaId };
};

export const deleteTable = (tableId) => {
  return { type: DELETE_TABLE, payload: tableId };
};
export const updateTable = (tableId, tableName) => {
  return { type: UPDATE_TABLE, payload: { tableId, tableName } };
};

//-CATEGORY
export const addCategory = (category) => {
  return { type: ADD_CATEGORY, payload: category };
};
export const deleteCategory = (categoryId) => {
  return { type: DELETE_CATEGORY, payload: categoryId };
};

export const showCategoryDetail = (categoryId) => {
  return { type: SHOW_CATEGORY_DETAIL, payload: categoryId };
};
export const updateCategory = (categoryId, categoryName) => {
  return { type: UPDATE_CATEGORY, payload: { categoryId, categoryName } };
};

//-PRODUCT
export const addProduct = (categoryId, productName, productPrice) => {
  return {
    type: ADD_PRODUCT,
    payload: { categoryId, productName, productPrice },
  };
};

export const updateProduct = (productId, productName, productPrice) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { productId, productName, productPrice },
  };
};

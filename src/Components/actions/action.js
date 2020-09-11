//AREAS
export const ADD_AREA = "ADD_AREA";
export const DELETE_AREA = "DELETE_AREA";
export const UPDATE_AREA = "UPDATE_AREA";
//TABLES
export const ADD_TABLE = "ADD_TABLE";
export const DELETE_TABLE = "DELETE_TABLE";
export const UPDATE_TABLE = "UPDATE_TABLE";
//CATEGORY
export const ADD_CATEGORY = "ADD_CATEGORY";

//

//                 ----

//

//AREA
export const addArea = (area) => {
  return { type: ADD_AREA, payload: area };
};
export const deleteArea = (area) => {
  return { type: DELETE_AREA, payload: area };
};
export const updateArea = (id, newAreaName) => {
  return { type: UPDATE_AREA, payload: { id, newAreaName } };
};

//TABLE
export const addTable = (areaId) => {
  return { type: ADD_TABLE, payload: areaId };
};

export const deleteTable = (tableId) => {
  return { type: DELETE_TABLE, payload: tableId };
};
export const updateTable = (tableId, tableName) => {
  return { type: UPDATE_TABLE, payload: { tableId, tableName } };
};

//CATEGORY
export const addCategory = (category) => {
  return { type: ADD_CATEGORY, payload: category };
};

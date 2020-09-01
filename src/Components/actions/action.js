export const ADD_AREA = "ADD_AREA";
export const DELETE_AREA = "DELETE_AREA";
export const UPDATE_AREA = "UPDATE_AREA";

export const addArea = (area) => {
  return { type: ADD_AREA, payload: area };
};
export const deleteArea = (area) => {
  return { type: DELETE_AREA, payload: area };
};
export const updateArea = (area) => {
  return { type: UPDATE_AREA, payload: area };
};

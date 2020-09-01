const INITIAL_STATE = {
  area: [
    { areaId: 0, areaName: "İçerisi" },
    { areaId: 1, areaName: "Salon" },
  ],
  table: [
    { tableId: 0, areaId: 0, tableName: "Masa 1" },
    { tableId: 1, areaId: 1, tableName: "Masa 2" },
    { tableId: 2, areaId: 1, tableName: "Masa 3" },
    { tableId: 3, areaId: 1, tableName: "Masa 4" },
    { tableId: 4, areaId: 4, tableName: "Masa 5" },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_AREA":
      return {
        ...state,
        area: [
          ...state.area,
          {
            areaId: Math.random(),
            areaName: action.payload,
          },
        ],
      };

    case "DELETE_AREA":
      return {
        area: state.area.filter((area) => area.areaId !== action.payload),
        table: state.table.filter((table) => table.areaId !== action.payload),
      };
    default:
      return state;
  }
};

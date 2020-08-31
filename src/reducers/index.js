const INITIAL_STATE = {
  area: [
    { areaId: 0, areaName: "İçerisi" },
    { areaId: 1, areaName: "Salon" },
  ],
  table: [
    { tableId: 0, areaId: 0, tableName: "Masa 1" },
    { tableId: 0, areaId: 0, tableName: "Masa 2" },
    { tableId: 0, areaId: 0, tableName: "Masa 3" },
    { tableId: 0, areaId: 0, tableName: "Masa 4" },
    { tableId: 0, areaId: 1, tableName: "Masa 5" },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  return state;
};

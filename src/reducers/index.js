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
    { tableId: 4, areaId: 1, tableName: "Masa 5" },
  ],
  category: [{ categoryId: 0, categoryName: "İçecekler" }],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //AREA

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
    case "UPDATE_AREA":
      return {
        ...state,
        area: state.area.map((area) => {
          if (area.areaId === action.payload.id) {
            return {
              areaId: area.areaId,
              areaName: action.payload.newAreaName,
            };
          }
          return area;
        }),
      };

    //TABLE

    case "ADD_TABLE":
      return {
        ...state,
        table: [
          ...state.table,
          {
            tableId: Math.random(),
            areaId: action.payload,
            tableName: "Yeni Masa",
          },
        ],
      };

    case "DELETE_TABLE":
      return {
        ...state,
        table: state.table.filter((table) => table.tableId !== action.payload),
      };
    case "UPDATE_TABLE":
      return {
        ...state,
        table: state.table.map((table) => {
          if (table.tableId === action.payload.tableId) {
            return {
              tableId: table.tableId,
              tableName: action.payload.tableName,
              areaId: table.areaId,
            };
          }
          return table;
        }),
      };

    //CATEGORY
    case "ADD_CATEGORY":
      return {
        ...state,
        category: [
          ...state.category,
          {
            categoryId: Math.random(),
            categoryName: action.payload,
          },
        ],
      };
    //DELETE CATEGORY, PRODUCT KISMI EKLENDİKTEN SONRA GÜNCELLENECEK.
    //CATEGORY İCERİSİNDEKİ PRODUCTLARINDA SİLİNMESİ GEREKECEK
    case "DELETE_CATEGORY":
      return {
        ...state,
        category: state.category.filter(
          (category) => category.categoryId !== action.payload
        ),
      };

    //DEFAULT
    default:
      return state;
  }
};

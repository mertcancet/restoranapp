const INITIAL_STATE = {
  mekan: [
    { mekanId: 0, mekanAdi: "İçerisi" },
    { mekanId: 1, mekanAdi: "Salon" },
  ],
  masa: [
    { masaId: 0, mekanId: 0, masaAdi: "Masa 1" },
    { masaId: 0, mekanId: 0, masaAdi: "Masa 2" },
    { masaId: 0, mekanId: 0, masaAdi: "Masa 3" },
    { masaId: 0, mekanId: 0, masaAdi: "Masa 4" },
    { masaId: 0, mekanId: 1, masaAdi: "Masa 5" },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  return state;
};

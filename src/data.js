export const mekanData = [
  {
    mekanId: 1,
    mekanAdi: "İç",
  },
  {
    mekanId: 2,
    mekanAdi: "Bahce",
  },
];

export const masaData = [
  {
    masaId: 1,
    mekanId: 1,
    masaAdi: "Masa1",
  },
  {
    masaId: 2,
    mekanId: 1,
    masaAdi: "Masa2",
  },
  {
    masaId: 3,
    mekanId: 1,
    masaAdi: "Masa3",
  },
  {
    masaId: 4,
    mekanId: 1,
    masaAdi: "Masa4",
  },
  {
    masaId: 5,
    mekanId: 2,
    masaAdi: "Masa1",
  },
  {
    masaId: 6,
    mekanId: 2,
    masaAdi: "Masa2",
  },
];


<Tab
eventKey={mekan.mekanId}
title={mekan.mekanAdı}
key={mekan.mekanId}
>
<div className="my-2">
  <Tables />
</div>
</Tab>



<Tabs
id="controlled-tab-example"
activeKey={key}
onSelect={(k) => setKey(k)}
>
<Tab eventKey="ic-mekan" title="İç Mekan">
  <div className="my-2">
    <Tables />
  </div>
</Tab>

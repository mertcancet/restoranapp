import React from "react";

const Products = () => {
  return (
    <div>
      <table className="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Ürün İsmi</th>
            <th scope="col">Fiyatı</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cola</td>
            <td>7TL</td>
          </tr>
          <tr>
            <td>Fanta</td>
            <td>7TL</td>
          </tr>
          <tr>
            <td>Gazoz</td>
            <td>7TL</td>
          </tr>
          <tr>
            <td>Ayran</td>
            <td>7TL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Products;

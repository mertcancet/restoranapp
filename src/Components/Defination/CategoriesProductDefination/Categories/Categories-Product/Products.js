import React from "react";
import { connect } from "react-redux";

const Products = (props) => {
  const Category = parseFloat(props.Category);
  return (
    <div>
      <table className="table table-sm table-hover table-striped">
        <thead>
          <tr>
            <th scope="col">Ürün İsmi</th>
            <th scope="col">Fiyatı</th>
            <th scope="col"> Düzenle </th>
          </tr>
        </thead>
        <tbody>
          {props.product.map((product) => {
            console.log(product.categoryId);
            if (parseFloat(product.categoryId) === Category)
              return (
                <tr>
                  <td>{product.productName}</td>
                  <td>{product.productPrice}TL</td>
                  <td></td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

export default connect(mapStateToProps, {})(Products);

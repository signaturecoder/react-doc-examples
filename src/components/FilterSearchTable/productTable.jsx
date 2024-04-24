import React from "react";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr colSpan="2">
      <th>{category}</th>
    </tr>
  );
};

const ProductRow = ({ item }) => {
  const name = item.stocked ? (
    item.name
  ) : (
    <span style={{ color: "red" }}>{item.name}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{item.price}</td>
    </tr>
  );
};

export const ProductTable = ({ products, filterText, inStock }) => {
  console.log(products);

  let rows = [];
  let lastCategory = null;

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()));
  console.log("Filtered Products ", filteredProducts);

  products.forEach((item) => {

    if(item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
        return;

    if(inStock && !item.stocked)
        return;
    if (item.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow category={item.category} key={item.category} />
      );
    }
    rows.push(<ProductRow item={item} key={item.name} />);
    lastCategory = item.category;
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};


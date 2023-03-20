import React from 'react';

const Menu = ({ filteredList }) => {
  console.log(filteredList);
  return (
    <div className="container">
      {filteredList?.map((item) => {
        const { id, title, category, price } = item;
        return (
          <div key={id} className="container mt-5">
            <h1>{title}</h1>
            <h1>{category}</h1>
            <h1>{price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;

import React from 'react';

const Categories = ({ filteredItems }) => {
  const filteredCat = (e) => {
    filteredItems(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="d-flex gap-2">
      <button className="btn btn-primary" onClick={filteredCat} value="all">
        All
      </button>
      <button className="btn btn-primary" onClick={filteredCat} value="lunch">
        Lunch
      </button>
      <button
        className="btn btn-primary"
        onClick={filteredCat}
        value="breakfast"
      >
        Breakfast
      </button>
      <button className="btn btn-primary" onClick={filteredCat} value="shakes">
        Shakes
      </button>
    </div>
  );
};

export default Categories;

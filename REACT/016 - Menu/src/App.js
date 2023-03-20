import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [filteredList, setFilteredList] = useState(items);

  const filteredItems = (cat) => {
    cat === "all"
      ? setFilteredList(items)
      : setFilteredList(items.filter((item) => item.category === cat));
  };

  return (
    <div className="container">
      <h2>Our Menu</h2>
      <Categories filteredItems={filteredItems} />
      <Menu filteredList={filteredList} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { v4 as uuidv4 } from "uuid";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  //değişkenler
  const [list, setList] = useState(getLocalStorage());

  //useEffect
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  //değişkenler
  const [name, setName] = useState("");
  const [isEditing, setisEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [warning, setWarning] = useState(false);

  const handleClick = () => {
    if (isEditing && name) {
      //long version

      // setList(
      //   list?.map((item) => {
      //     if (item.id == editId) {
      //       return { ...item, title: name };
      //     } else {
      //       return item;
      //     }
      //   })
      // );
      setList(
        list?.map((item) =>
          item.id === editId ? { ...item, title: name } : item
        )
      );
      setisEditing(false);
      setName("");
    } else if (name) {
      const newId = uuidv4();
      const newItem = { id: newId, title: name };
      setList([...list, newItem]);
      setName("");
    } else {
      setWarning(true);
    }
  };
  const handleDelete = (id) => {
    setList(list?.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    const specificItem = list.find((item) => item.id === id);
    console.log(specificItem);
    setisEditing(true);
    setName(specificItem.title);
    setEditId(id);
  };

  return (
    <div className="section-center g-3">
      <div className="">
        <div className="card-body my-5">
          <div className="d-flex justify-content-center my-4">
            <h2 className="card-title ">Grocery Bud</h2>
          </div>
          <div className="d-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className="m-3">
                <input
                  type="text"
                  id="inputText6"
                  className="form-control"
                  aria-describedby="passwordHelpInline"
                  placeholder="e.g. eggs"
                  style={{ width: "250px" }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    e.keyCode == 13 && handleClick();
                  }}
                />
              </div>
              <div>
                <button className="btn btn-primary" onClick={handleClick}>
                  {isEditing ? "Edit" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {warning && <Alert setWarning={setWarning} list={list} />}
      <List list={list} handleDelete={handleDelete} handleEdit={handleEdit} />
      {!list.length || (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              setList([]);
            }}
          >
            Clear Items
          </button>
        </div>
      )}
    </div>
  );
}

export default App

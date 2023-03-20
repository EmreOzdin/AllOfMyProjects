import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const List = ({ list, handleDelete, handleEdit }) => {
  // console.log(list);
  // console.log(list[0].title);
  return (
    <div style={{ width: "100%" }}>
      {list?.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="d-flex justify-content-between">
            <div className="">
              <h3>{title}</h3>
            </div>
            <div className="fs-6">
              <FaEdit
                className="mx-4 text-primary"
                onClick={() => handleEdit(id)}
                cursor="pointer"
              />
              <FaTrash
                className="text-danger"
                onClick={() => handleDelete(id)}
                cursor="pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List

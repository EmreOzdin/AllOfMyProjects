import React, { useState } from 'react';
import data from './data';

function App() {
  const [num, setNum] = useState();
  const [para, setPara] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNum(e.target.value);
    setPara(data.slice(0,num));
    console.log(num)
    setNum(num)
  }

  return (
    <div className="container">
      <h2 className="section-center my-5">TIRED OF BORING LOREM IPSUM</h2>
      <form className="d-flex gap-5 justify-content-center align-items-center">
        <div className="align-items-center">
          <span>Paragraphs</span>
        </div>
        <div className=" gap-3" style={{ width: "100px" }}>
          <input
            type="number"
            className="form-control"
            id="inputPassword2"
            // min={0}
            max={8}
            step={1}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <button
            type="text"
            className="btn btn-primary mb-3"
            onClick={handleSubmit}
          >
            GENERATE
          </button>
        </div>
      </form>
      {num <= 0 ? (
        <div className="row">{data[0]}</div>
      ) : (
        <div className="row">{para}</div>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import axios from "axios";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);

  const handleClick = (id) => {
    setNum(id);
  };

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setData(newJobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
console.log(data);

  const { dates, duties, order, title, id} = data[num];

  return (
    <div className="section">
      <h1 className="title">Experience</h1>
      <div className="underline"></div>
      <div className="section-content" style={{ display: "flex" }}>
        <div className="row">
          {data?.map((item) => {
            return (
              <>
                <div key={item.id} style={{ display: "flex" }}>
                  <h2
                    className="job-btn"
                    onClick={() => handleClick(item.order)}
                  >
                    deneme
                  </h2>
                </div>
              </>
            );
          })}
          {console.log(num)}

                <>
                  <div style={{ display: "flex" }}>
                    <div>
                      <h2 className="job-info">{title}</h2>
                      <h2>{dates}</h2>
                      <h2>{duties}</h2>
                    </div>
                  </div>
                </>

        </div>
      </div>
    </div>
  );
}
export default App;

//another version of data fetching

// const fetchData = async () => {
//   try {
//     const response = await axios.get(url);
//     console.log(response.data);
//     const data = response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };
// useEffect(() => {
//   fetchData();
// }, []);

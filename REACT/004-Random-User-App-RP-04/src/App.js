import { useState, useEffect } from "react";
import "./App.css";
import emailSvg from "./assets/email.svg";
import phoneSvg from "./assets/phone.svg";
import locationSvg from "./assets/location.svg";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results);
        console.log(data.results);
      });
  };

  return (
    <div className="App">
      {user?.map((item, index) => (
        <div key={index} className="card-wrapper">
          <div className="header-container">
            <img src={item.picture.large} alt="user" />
            <p className="header">
              {item.name.title} {item.name.first} {item.name.last}
            </p>
          </div>
          <div className="par-container">
            <img src={emailSvg} alt="" className="icon" />
            <p className="par">{item.email}</p>
          </div>

          <div className="par-container">
            <img src={phoneSvg} alt="" className="icon" />
            <p className="par">{item.cell}</p>
          </div>
          <div className="par-container">
            <img src={locationSvg} alt="" className="icon" />
            <p className="par">
              {item.location.city} - {item.location.country}
            </p>
          </div>
          <p> Age: {item.dob.age}</p>
          <p>Register Date: {item.registered.date.substr(0, 10)}</p>
        </div>
      ))}
      <button onClick={fetchUser}>Random User</button>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.github.com/users";

const getUserDetails = async (API_URL, userId) => {
  const { data } = await axios.get(`${API_URL}/userId`);
  console.log("data", data);
  return data;
};

const App = () => {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = event => {
    setUser(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { data: results } = getUserDetails(API_URL, user);
    console.log("Results: ", results);
    setUsers([...users, results]);
    console.log("users", users);
  };

  return (
    <div className="tc">
      <h1>Github Profiles</h1>
      <div className="tc">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user"
            name="user"
            onChange={handleChange}
            value={user}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;

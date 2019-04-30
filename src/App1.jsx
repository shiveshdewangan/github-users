import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

const useFetch = async (url, id) => {
  const [users, setUsers] = useState([]);

  const getUserDetails = async (url, id) => {
    const { data } = await axios.get(url + id);
    return data;
  };

  useEffect(() => {
    const results = getUserDetails(url, id);
    setUsers([...users, results]);
  }, []);

  // const { data } = await axios.get(url + id);
  // setUsers([...users, data]);
  console.log(users);
  // return users;
};

const App = () => {
  const [user, setUser] = useState("");
  const results = useFetch(API_URL, "users");

  const handleChange = event => {
    setUser(event.target.value);
    console.log(user);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("SUBMITTED");
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

import React, { Component } from "react";
import axios from "axios";

const API_BASE_URL = "https://api.github.com/users/";

class App extends Component {
  state = {
    users: [],
    user: ""
  };

  handleChange = event => {
    this.setState({ user: event.target.value.trim() });
    console.log(this.state.user);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const userId = this.state.user;
    console.log("SUBMIT", userId);

    const result = this.fetchData(API_BASE_URL, this.state.user);

    result.then(res =>
      this.setState({
        users: [...this.state.users, res.data]
      })
    );
    console.log(this.state.users);
  };

  fetchData = async (url, id) => {
    const response = await axios.get(url + id);
    return response;
  };

  render() {
    const { users, user } = this.state;
    return (
      <div className="tc">
        <h1>Github Profiles</h1>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="user"
              id="user"
              value={user}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          <ul>
            {users.map(u => (
              <li>
                <span>{u.login}</span>
                <img
                  src={u.avatar_url}
                  alt="Profile Pic"
                  width="200px"
                  height="200px"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

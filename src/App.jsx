import React, { Component } from "react";
import axios from "axios";
import "./index.css";

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
    console.log("event.target", event.target.user);
    // event.target.user.value = "";
    this.state.user = "";
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
              <div className="dib br3 pa3 ma2 grow bw2 shadow-5 block profile">
                <img src={u.avatar_url} alt="" />
                <p>Repos: {u.public_repos}</p>
                {u.bio ? <p>{u.bio}</p> : null}
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

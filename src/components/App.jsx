import React, { Component } from "react";
import API from "../api/api";
import "../index.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    user: "",
    error: ""
  };

  componentDidMount = async () => {
    const { data } = await axios.get(
      "https://api.github.com/users/shiveshdewangan/repos"
    );
    console.log("repo", data);
  };

  handleChange = event => {
    this.setState({ user: event.target.value.trim() });
    console.log(this.state.user);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { users, user } = this.state;
    let result = "";

    try {
      const { data: result } = await API.get(`${user}`);
      this.setState({
        users: [...this.state.users, result]
      });
    } catch (error) {
      this.setState({
        error: error.message
      });
    }

    this.setState({
      user: ""
    });
  };

  handleDetails = async (event, id) => {
    event.preventDefault();
    console.log("id", id);
    const { data } = await API.get(`${id}/repos`);
    console.log("repos", data);
  };

  render() {
    const { users, user, error } = this.state;

    if (error) {
      return (
        <p className="tc error">
          {error && "Oops! Something went wrong. Please try again."}
        </p>
      );
    }
    return (
      <div className="tc container">
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
              <div
                key={u.id}
                className="dib br3 pa3 ma2 bw2 shadow-5 block profile"
              >
                <img src={u.avatar_url} alt="" />
                <p>Repos: {u.public_repos}</p>
                {u.bio ? <p>{u.bio}</p> : null}
                <span>
                  <button onClick={event => this.handleDetails(event, u.login)}>
                    Get Details
                  </button>
                </span>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <h1>Details</h1>
          <p>User Repos Details</p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import API from "../api/api";
import "../index.css";
import Header from "./Header";
import SimpleForm from "./SimpleForm";
import UsersList from "./UsersList";
import RepoDetails from "./RepoDetails";

class App extends Component {
  state = {
    users: [],
    user: "",
    userDetails: "",
    error: ""
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ user: event.target.value.trim() });
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
    const { data } = await API.get(`${id}/repos`);
    this.setState({
      userDetails: data
    });
    console.log("data", data);
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

    console.log("this.state", this.state);

    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="form">
          <SimpleForm
            value={user}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div className="user-list">
          <UsersList users={users} />
        </div>
      </>
    );
  }
}

export default App;

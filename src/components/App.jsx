import React, { Component } from "react";
import API from "../api/api";
import "../index.css";
import Header from "./Header";
import SimpleForm from "./SimpleForm";
import UsersList from "./UsersList";
import RepoDetails from "./RepoDetails";
import Spinner from "./Spinner/Spinner";

class App extends Component {
  state = {
    users: [],
    user: "",
    userDetails: "",
    error: "",
    isLoading: false
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
      this.setState({
        isLoading: true
      });
      const { data: result } = await API.get(`${user}`);
      debugger;
      this.setState({
        users: [...this.state.users, result],
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false
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
    const { users, user, error, isLoading } = this.state;

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
          <UsersList isLoading={isLoading} users={users} />
        </div>
        {/* <Spinner /> */}
      </>
    );
  }
}

export default App;

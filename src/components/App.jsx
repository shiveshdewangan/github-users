import React, { Component } from "react";
import API from "../api/api";
import Header from "./Header";
import SimpleForm from "./SimpleForm";
import UsersList from "./UsersList";
import Spinner from "./Spinner/Spinner";
import "../index.css";

class App extends Component {
  state = {
    users: [],
    user: "",
    error: "",
    isLoading: false
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ user: event.target.value.trim() });
  };

  handleSubmit = async event => {
    this.setState({
      isLoading: true
    });

    event.preventDefault();
    const { users, user } = this.state;

    try {
      const { data: result } = await API.get(`${user}`);
      console.log("result", result);
      this.setState({
        users: [...users, result],
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
  };

  render() {
    const { users, user, error, isLoading } = this.state;
    
    let usersList = (
      <div className="user-list">
        <UsersList users={users} isLoading={isLoading} />
      </div>
    );

    if (isLoading) usersList = <Spinner />;

    if (error) {
      return (
        <p className="tc error">
          {error && "Oops! Something went wrong. Please try again."}
        </p>
      );
    }

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
        {usersList}
      </>
    );
  }
}

export default App;

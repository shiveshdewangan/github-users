import React from "react";
import User from "./User";

const UsersList = ({ users, handleDetails }) => {
  return (
    <>
      {users.map(user => (
        <User
          name={user.login}
          id={user.id}
          avatar={user.avatar_url}
          bio={user.bio}
          repos={user.public_repos}
        />
      ))}
    </>
  );
};

export default UsersList;

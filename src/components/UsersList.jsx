import React from "react";
import User from "./User";

const UsersList = ({ users, handleDetails }) => {
  return (
    <div>
      {/* {users.map(u => (
        <div key={u.id} className="dib br3 pa3 ma2 bw2 shadow-5 block profile">
          <img src={u.avatar_url} alt="" />
          <p>Repos: {u.public_repos}</p>
          {u.bio ? <p>{u.bio}</p> : null}
          <span>
            <button onClick={event => handleDetails(event, u.login)}>
              Get Details
            </button>
          </span>
        </div>
      ))} */}
      {users.map(user => (
        <User
          name={user.login}
          id={user.id}
          avatar={user.avatar_url}
          bio={user.bio}
          handleDetails={handleDetails}
        />
      ))}
    </div>
  );
};

export default UsersList;

import React from "react";

const UsersList = ({ users, handleDetails }) => {
  return (
    <div>
      {users.map(u => (
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
      ))}
    </div>
  );
};

export default UsersList;

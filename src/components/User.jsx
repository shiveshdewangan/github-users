import React from "react";

const User = ({ name, repos, avatar, bio }) => {
  return (
    <article className="user">
      <h3 className="name">
        <em>{name}</em>
      </h3>
      <img className="avatar" src={avatar} alt={name} />
      <div>
        <strong>Repos</strong>: <span>{repos}</span>
      </div>
      {bio ? (
        <p>
          <strong>Bio</strong>: {bio}
        </p>
      ) : null}
    </article>
  );
};

export default User;

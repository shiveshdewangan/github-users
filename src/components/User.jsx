import React from "react";
import Spinner from "./Spinner/Spinner";

const User = ({ name, repos, avatar, bio, isLoading }) => {
  let result = (
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

  if (isLoading) result = <Spinner />;

  return (
    // <article className="user">
    //   <h3 className="name">
    //     <em>{name}</em>
    //   </h3>
    //   <img className="avatar" src={avatar} alt={name} />
    //   <div>
    //     <strong>Repos</strong>: <span>{repos}</span>
    //   </div>
    //   {bio ? (
    //     <p>
    //       <strong>Bio</strong>: {bio}
    //     </p>
    //   ) : null}
    // </article>
    { result }
  );
};

export default User;

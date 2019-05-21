import React from "react";

const User = ({ name, id, avatar, bio, handleDetails }) => {
  return (
    <div className="user">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <button>Get Details -></button>
    </div>
  );
};

export default User;

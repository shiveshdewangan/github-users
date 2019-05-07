import React from "react";

const SimpleForm = ({ value, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="user"
        id="user"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;

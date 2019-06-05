import React from "react";

const SimpleForm = ({ value, handleChange, handleSubmit }) => {
  return (
    <>
      <form className="inline-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          value={value}
          onChange={handleChange}
          placeholder="Type a Github Userid"
        />
        <button disabled={!!!value} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default SimpleForm;

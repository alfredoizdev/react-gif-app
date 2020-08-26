import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategorie = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim().length > 2) return;

    setCategories((category) => [inputValue, ...category]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add categories'
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategorie;

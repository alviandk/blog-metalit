import React from 'react';

const SearchInput = ({ articles }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search beer by name"
      />
    </div>
  );
};

export default SearchInput;
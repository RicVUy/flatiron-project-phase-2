import React from "react";

function SearchEmployee({searchTerm, setSearchTerm}) {
  return (
    <div className="searchbar">
      <h2 htmlFor="search" className="box1">Search Employee:</h2>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchEmployee;
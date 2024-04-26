import React, { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [dropdownOptions] = useState([
    "Celebrity",
    "Politician",
    "Actress",
    "Doctor",
    "Engineer",
  ]);
  const [showDropdown, setShowDropdown] = useState(false);

  const filterDropdown = (event) => {
    const value = event.target.value.toLowerCase();
    setShowDropdown(true);
    setInputValue(value);
  };

  const selectOption = (option) => {
    setInputValue(option);
    setShowDropdown(false);
  };

  return (
    <div className="main-content">
      <div className="topic">
        <h2>Blog Topic</h2>
        <input type="text" className="topic-input" placeholder="Type here..." />
      </div>
      <div className="category">
        <h2>Blog Category</h2>
        <input
          type="text"
          value={inputValue}
          placeholder="Type here..."
          onChange={filterDropdown}
        />
        {showDropdown && (
          <div className="dropdown-content">
            {dropdownOptions
              .filter((option) => option.toLowerCase().includes(inputValue))
              .map((option, index) => (
                <button key={index} onClick={() => selectOption(option)}>
                  {option}
                </button>
              ))}
          </div>
        )}
      </div>
      <div className="blog-content">
        <h2>Blog Content</h2>
        <div className="content-input" contentEditable="true"></div>
      </div>
      <div className="function">
        <button className="save">Save</button>
        <button
          className="upload"
          style={{
            backgroundColor: "#f1356d",
            color: "white"
            
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
}

export default Home;

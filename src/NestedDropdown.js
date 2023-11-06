import React, { useState } from 'react';


const NestedDropdown = () => {
  // State for selected main option and sub-option
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedSubOption, setSelectedSubOption] = useState(null);

  // Data for options and sub-options
  const options = [
    {
      label: 'Pizza',
      subOptions: ['Margherita', 'Champignons', 'Seafood'],
    },
    {
      label: 'Burger',
    },
    {
      label: 'Pasta',
      subOptions: ['Tomato sauce', 'Bachamel', 'Alfredo'],
    },
    {
      label: 'Sushi',
    },
  ];

  // Function to handle main option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedSubOption(null); // Reset the sub-option when the main option changes
  };

  // Function to handle sub-option change
  const handleSubOptionChange = (event) => {
    setSelectedSubOption(event.target.value);
  };

  // Function to render sub-options based on selected main option
  const renderSubOptions = () => {
    const selectedMainOption = options.find((option) => option.label === selectedOption);
    if (selectedMainOption && selectedMainOption.subOptions) {
      return (
        <div className="input-container">
          <label className="input-label">What kind of {selectedOption}? </label>
          <select
            className="dropdown-select"
            value={selectedSubOption}
            onChange={handleSubOptionChange}
          >
            <option value="">-- Select a sub-option --</option>
            {selectedMainOption.subOptions.map((subOption, index) => (
              <option key={index} value={subOption}>
                {subOption}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return null; // No sub-options to render
  };

  return (
    <div className="nested-dropdown-container">
      <div className="input-container">
        <label className="input-label"> Favourite Food? </label>
        <select
          className="dropdown-select"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="">-- Select an option --</option>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {selectedOption && renderSubOptions()}

      {selectedOption && (
        <p className="input-p">
          Yumm, {selectedOption} {selectedSubOption}. Good Choice!
        </p>
      )}

      <hr/>

    </div>

  );
};

export default NestedDropdown;

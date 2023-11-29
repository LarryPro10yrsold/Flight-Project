import React, { useState } from 'react';

const Dropdown = () => {
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Options for the dropdown
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  // Function to handle option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;
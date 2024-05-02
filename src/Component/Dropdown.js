import React, { useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import './Dropdown.css'; // You can style the dropdown in Dropdown.css file

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleToggle}>
        {selectedItem ? selectedItem : 'Select '}
        <IoIosArrowDropdown style={{ position: 'absolute',   top: '50%',right: '10px' ,transform: 'translateY(-50%)'}} />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;

import React, { useState, useRef, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import './dropdown.css'; // Asegúrate de tener este archivo

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Cerrar dropdown si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = ['To do', 'In Progress', 'Done'];

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="status-display">
          <div className="status-dot" />
          <span>To do</span>
        </div>
        <MdArrowDropDown className={`icon ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div className="dropdown-item" key={option} onClick={() => {
              // Aquí puedes manejar el cambio de opción
              console.log('Seleccionado:', option);
              setIsOpen(false);
            }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

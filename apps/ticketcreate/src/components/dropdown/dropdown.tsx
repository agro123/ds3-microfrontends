import { useState, useRef, useEffect, ReactNode, useMemo } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import './dropdown.css'; // Asegúrate de tener este archivo

interface Option {key: string | number; label: string; [key: string]: any }

const Dropdown = (props: {options: Option[]; customItem?: (...values: any) => ReactNode, onChange?: (value?: Option['key'], option?:  Option) => void, value?: Option['key']}) => {
  const {options = [], customItem, onChange, value} = props
  const [isOpen, setIsOpen] = useState(false);
  const [_value, setValue] = useState<Option['key'] | null>(null)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const dropdownRef = useRef<any>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if(value !== _value){
      const _option = options.find(opt => opt.key === value)
      setSelectedOption(_option ? _option : null);
      setValue(value || null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  

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

  const _onChange = (option: Option) => {
    setValue(option.key)
    setSelectedOption(option)
    onChange && onChange(option.key, option)
  }

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <div className="dropdown-header" onClick={toggleDropdown}>
          {!selectedOption ? 'Select an option' : customItem ? customItem(selectedOption) : <span>{selectedOption?.label}</span> }
        <MdArrowDropDown className={`icon ${isOpen ? 'open' : ''}`} />
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div className="dropdown-item" key={option.key} onClick={() => {
              _onChange(option)
              setIsOpen(false);
            }}>
              {customItem ? customItem(option) :  option.label }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

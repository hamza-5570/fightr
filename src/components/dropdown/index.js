import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown = ({ value, options = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex justify-between  cursor-pointer   mt-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-sm text-white">{value || "Select"}</p>
        <IoMdArrowDropdown
          className={`text-white text-base transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-full bg-black z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 text-sm text-white hover:text-black hover:bg-white cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import React from "react";

interface DropdownMenuProps {
  isOpen: boolean;
  options: string[];
  onToggle: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, options, onToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-50 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
      <div className="p-2">
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;

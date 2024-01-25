import { useState } from "react";

const RadioInput = ({ name, placeholder, checked = false }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleRadioChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="border-solid border-[1px] border-black-900/25 py-4 px-6 rounded-lg flex items-center gap-4 tablet:odd:col-start-2">
      <input
        type="radio"
        name={name}
        defaultChecked={checked}
        onChange={handleRadioChange}
        className="relative grid items-center justify-items-center appearance-none aspect-square w-[20px] rounded-full border-solid border-[1px] border-black-900/50 after:absolute after:content-[''] after:aspect-square after:w-[10px] after:rounded-full checked:after:bg-orange-900"
      />

      <label htmlFor={name} className="font-bold text-[14px]">
        {placeholder}
      </label>
    </div>
  );
};

export default RadioInput;

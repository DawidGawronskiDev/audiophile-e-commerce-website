import { useState } from "react";

const TextInput = ({ name, placeholder, format }) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Example validation: Check if the input follows a specific format, e.g., containing only letters
    const isValidInput = format.test(value);
    setIsValid(isValidInput);
  };

  return (
    <div className="relative">
      {!isValid && (
        <p className="absolute -top-5 right-0 text-red-500 font-bold text-[12px] text-right">
          Wrong format
        </p>
      )}
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={`w-full px-8 py-4 text-[14px] decoration-orange-900 font-bold rounded-lg focus:outline-none border-solid border-[1px] border-black-900/25 focus:border-orange-900 caret-orange-900 ${
          !isValid ? `border-red-500` : ``
        } ${inputValue.length > 0 ? `border-orange-900` : ``}`}
      />
    </div>
  );
};

export default TextInput;

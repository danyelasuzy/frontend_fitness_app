import React, { useState } from "react";
//import styles from "./inputBox1.module.css"; ! CONVERTED TO TAILWIND CSS

const InputBox1 = ({ placeholder, onInputSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = ()=> {
        onInputSubmit(inputValue);
        setInputValue("");
    };

    return (
        <div className="flex flex-col items-start">
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className="font-[lato] font-semibold text-lg text-[#12352480] bg-[rgba(160,120,63,0.3)] outline-none border-2 border-[#123524] w-full p-2 rounded-md mb-2"
                /> 
        </div>
    );
};

export default InputBox1;
import React, { useState } from "react";
import styles from "./inputBow1.module.css";

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
        <div className={styles.inputcontainer}>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                className={styles.inputBox}
                /> 
        </div>
    );
};

export default InputBox1;
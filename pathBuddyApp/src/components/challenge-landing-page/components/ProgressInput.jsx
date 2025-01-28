import { useState } from "react";
import SmallDarkGreenButton from "../../Buttons/SmallDarkGreen/SmallDarkGreenButton";

const ProgressInput = ({ onProgressChange }) => {
  const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        const numericValue = Number(inputValue);
        if (!isNaN(numericValue) && numericValue > 0) {
            onProgressChange((prevProgress) => prevProgress + numericValue);
            setInputValue(""); // Reset input po dodaniu wartości
        }
    };

    return (
        <div style={{display:"flex",flexDirection:"row", gap:"20px"}}>
            <input
                type="number"
                placeholder="Enter kilometers walked"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
                style={{ padding: "10px", fontSize: "16px", width: "210px" }}
            />
            <SmallDarkGreenButton onClick={handleSubmit}>Add progress</SmallDarkGreenButton>
        </div>
    );
};
export default ProgressInput;

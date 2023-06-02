import React from "react";
import styles from "./InputTypeC.module.css";

function InputTypeC({ value, placeholder }) {
    return (
        <input
            type="text"
            className={styles.InputTypeC}
            value={value}
            placeholder={placeholder}
        />
    );
}
export default InputTypeC;
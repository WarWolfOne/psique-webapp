import React from "react";
import styles from "./Input.module.css";
function Input({value, placeholder}){
    return(
        <input 
            type="text"    
            className={styles.Input}
            value={value}
            placeholder={placeholder}
        />
    );
}
export default Input;
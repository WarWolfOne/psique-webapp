import React from "react";
import styles from "./InputTypeB.module.css";
function InputTypeB({value, placeholder}){
    return(
        <input 
            type="text" 
            className={styles.InputTypeB} 
            value={value}
            placeholder={placeholder}
        />
    );
}
export default InputTypeB;
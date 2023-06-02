import React from "react";
import styles from "./Button.module.css";

function Button({title, onClick}) {
    return(
        <button className={styles.Button}>{title}</button>
    );
}
export default Button;
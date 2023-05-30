import React from "react";
import styles from "./Label.module.css";

function Label({labelTitle}) {
    return(
        <p className={styles.label}>{labelTitle}</p>
    );
}
export default Label;